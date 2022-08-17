import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClinicService } from './clinic.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
  providers: [NgbModalConfig, NgbModal],
  encapsulation : ViewEncapsulation.None
})
export class ClinicsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER];
  user = JSON.parse(localStorage.getItem('user'));
  isDeleting : boolean;
  isEditing :boolean;
  isLoading : boolean;
  form : FormGroup;
  singleClinicSub : Subscription;
  imagesArray : Array<any> = [];
  servicesArray = [];
  clinics = [];
  clinicId : any = '';
  clinicMod;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal ,
    private clinicService : ClinicService,
    private fb : FormBuilder
  ) {       config.backdrop = 'static';
  config.keyboard = false;}

  ngOnInit(): void {
    
    this.getClinics();
    this.clinicService.clinicsUpdated
    .subscribe(x => {
      this.getClinics();
      this.modalService.dismissAll();
    })
    this.form = this.fb.group({
      name : ['' , Validators.required],
      address : ['' , Validators.required],
      phone : ['' , Validators.required],
      price : ['' , Validators.required ],
      image : this.fb.array([]),
      services : ['']
    });
  }

  create(data) : FormGroup{
    return this.fb.group(data);
  }

  get cImages() : FormArray {
    return this.form.get('image') as FormArray;
  }

  getClinic(id){
    console.log(id);
    this.clinicId = id;
    this.isLoading = true;

    setTimeout(() => {
        this.isLoading = false;
    }, 1000);
  }

  addService(event : MatChipInputEvent){
    const value = (event.value || '').trim();

    if(value) {
      this.servicesArray.push(value);
    }

    // clear the input

    event.chipInput!.clear();

    this.form.get('services').setValue(null);
  }

  removeService(service){
    const index = this.servicesArray.indexOf(service);

    if(index >= 0) {
      this.servicesArray.splice(index , 1);
    }
  }

  pickImages(event){
    this.imagesArray = event.target.files;
    console.log(this.imagesArray);
    if(this.imagesArray){
      for(let image of this.imagesArray){
        const reader = new FileReader();

        reader.onload = (e : any) =>{
          this.cImages.push(
            this.create({
              image,
              name :image.name
            })
          );
        };
        reader.readAsDataURL(image)
      }
    }
  }
  clearImages(){
    this.imagesArray = [];
  }

  clearForm(){
    if(this.clinicMod){
      this.singleClinicSub.unsubscribe();
    }
    this.form.reset();
    this.cImages.clear();
    this.imagesArray = [];
    this.servicesArray = [];
  }

  addClinic(content){
    this.imagesArray = [];
    this.servicesArray = [];
    this.isDeleting = false;
    this.isEditing = false;
    this.modalService.open(content);
  }

  onAdd(){
    if(this.form.invalid){
      return;
    }
    if(!this.isEditing){

      this.clinicService.addClinic(
        this.form.value.name,
        this.form.value.address,
        this.form.value.phone,
        this.form.value.price,
        this.imagesArray,
        this.servicesArray,
        this.user.id
      )
    }

    else {
      this.isLoading = true;
      this.clinicService.editClinic(
        this.clinicMod.id , 
        this.form.value.name,
        this.form.value.address,
        this.form.value.phone,
        this.form.value.price,
        this.form.value.image,
        this.servicesArray,
        this.user.id)
        this.clearForm()
        
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
    }
  }

  deleteClinic(data,content ){
    this.isDeleting = true;
    this.clinicId = data._id;
    this.modalService.open(content);
  }

  onDelete(){
    this.isLoading = true;
    this.clinicService.deleteClinic(this.clinicId);
    this.modalService.dismissAll();
    setTimeout(() => {
      this.clinicId = ''
        this.isLoading = false;
    }, 500);
  }

  editClinic(data , content){
    this.isDeleting = false;
    this.isEditing = true;
    this.clinicId = data._id;
    this.clinicService.getSingleClinic(this.clinicId);
  this.singleClinicSub =  this.clinicService.singleClinic
    .subscribe(clinic => {
       this.clinicMod = {
        id : clinic._id ,
        name : clinic.name ,
         address : clinic.address ,
          phone : clinic.phone ,
           price : clinic.price , 
           images : clinic.images ,
            services : clinic.services }
  
            this.form.patchValue({
              name : this.clinicMod.name,
              address : this.clinicMod.address,
              phone : this.clinicMod.phone,
              price : this.clinicMod.price,
            });

      for(let image of this.clinicMod.images){
        this.imagesArray.push(image);
        this.cImages.push(
          this.create({
            image,
          })
        );
      }
      this.form.get('image').updateValueAndValidity();

      console.log(this.form.value.image);
      for(let i=0; i < this.clinicMod.services.length; i++){
        this.servicesArray.push(this.clinicMod.services[i])
        
      }
    })

    this.modalService.open(content);

  }


  getClinics(){
    this.clinicService.getClinics(this.user.id);
    this.clinicService.clinicsArray
    .subscribe(value => {
      this.clinics = value;
    });
  }
}
