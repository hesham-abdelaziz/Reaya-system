import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ToggleService } from 'src/app/header/toggle.service';
import { CountryService } from '../country/country.service';
import { SpecialityService } from '../specialities/speciality.service';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [NgbModalConfig, NgbModal],
  encapsulation : ViewEncapsulation.None

})
export class DoctorsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'speciality', 'status' , 'actions'];
  totalDoctors = 0;
  doctorPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [ 8 , 12 , 16];
  dataSource: MatTableDataSource<any>;
  isEditing : boolean = false;
  isLoading : boolean;
  isDeleting : boolean;
  MenuToggled : boolean;
  doctorAdded : boolean;
  form : FormGroup;
  specialites : any = [];
  states : any = [];
  doctorId;
  doctorModified;
  status;
  imagePreivew;
  governorates : Array<any> = [];
  cities : any = [];
  specSub : Subscription;
  countrySub : Subscription;

  cityLoading : boolean;
  loadingGov : boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
     config: NgbModalConfig,
    private modalService: NgbModal ,
    private doctorService : DoctorService ,
    private specService : SpecialityService ,
    private countryService : CountryService ,
    toggleService : ToggleService ) { 
      config.backdrop = 'static';
      config.keyboard = false;
      toggleService.toggleStatus()
      .subscribe(status => {
        this.MenuToggled = status;
      })
    }

  ngOnInit(): void {
    this.loadingGov = true;
    this.getDoctors();
    
    this.specService.getAll();
    this.specService.getAllSpecialites()
    .subscribe(spec => {
      console.log(spec);
      this.specialites = spec;
    });

    this.countryService.getAll()
    .subscribe({
      next : (res) => {
        this.loadingGov = false;
        this.governorates = res[0].data;
      },
      error : (err :HttpErrorResponse) => {
        console.log(err);
      }
    })
    this.form = new FormGroup({
      firstName : new FormControl(null , Validators.required),
      lastName : new FormControl(null , Validators.required),
      email : new FormControl(null , [Validators.required , Validators.email]),
      phone : new FormControl(null , Validators.required),
      gender : new FormControl(null , Validators.required),
      speciality : new FormControl(null , Validators.required),
      degree : new FormControl(null , Validators.required),
      governorate : new FormControl(null , Validators.required),
      city : new FormControl(null , Validators.required),
            image : new FormControl(null),
    });

  }

  toggle(event : any , id){
    if(event.checked == true){
      this.status ='active';
      setTimeout(() => {
        this.status ='';
      }, 2000);
      this.doctorService.enableDoctor(id);
    }
    else {
      this.status = 'inactive'
      setTimeout(() => {
        this.status ='';
      }, 2000);
      this.doctorService.disableDoctor(id);

    }

  }

  getCities(gov){
    this.cityLoading = true;
    this.cities = [];
    this.countryService.getCities(gov)
    .subscribe({
      next : (res) => {
        this.cityLoading = false;
        this.cities = res;
      },
      error : (err : HttpErrorResponse) => {
        console.log(err);
      }
    })

  }

  pickSpec(spec , ){
    console.log(spec);
  }

  pickImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image : file
    });
    this.form.get('image').updateValueAndValidity();
    this.imagePreivew = file;
    
  }
  onCancel(){
    this.imagePreivew = null;
    this.form.patchValue({
      image : null
    }); 
   }

  onAdd(content){
    this.isDeleting = false;
    this.isEditing = false;
    this.clearForm();
    this.modalService.open(content , { scrollable: true });
  }

  onEdit(content , doctor){
    this.doctorId = doctor.id
    this.isDeleting = false;
    this.isEditing = true;
    this.modalService.open(content , { scrollable: true })
    this.doctorService.getSingleDoctor(doctor.id);
    this.doctorService.singleDoctor
    .subscribe(doctor => {
      this.cityLoading = true;
       this.doctorModified = {
        id : doctor._id ,
         firstName : doctor.firstName ,
          lastName : doctor.lastName ,
        email : doctor.email,
        phone : doctor.phone,
        gender : doctor.gender,
        speciality : doctor.speciality,
        degree : doctor.degree,
        state : doctor.state,
        image : doctor.image,
        active : doctor.active,
        governorate : doctor.governorate,
        city : doctor.city,
      }

      this.countryService.getCities(this.doctorModified.governorate)
      .subscribe({
        next : (res) => {
          this.cityLoading = false;
          this.cities = res;
        },
        error : (err : HttpErrorResponse) => {
          console.log(err);
        }
      })
      this.form.patchValue({
        firstName : this.doctorModified.firstName,
        lastName : this.doctorModified.lastName,
        email : this.doctorModified.email,
        phone : this.doctorModified.phone,
        gender : this.doctorModified.gender,
        speciality : this.doctorModified.speciality,
        degree : this.doctorModified.degree,
        state : this.doctorModified.state,
        image : this.doctorModified.image,
        governorate : this.doctorModified.governorate,
        city : this.doctorModified.city,
      })
    })
  }

  onDelete(content ,doctorId ){
    this.doctorId = doctorId;
    this.isDeleting = true;
    this.modalService.open(content )
  }

  deleteDoctor(){
    this.doctorService.deleteDoctor(this.doctorId);
    this.modalService.dismissAll();
    this.doctorService.doctorsUpdated
    .subscribe(x => {
      this.getDoctors();
    });
  }

  onCreate(){

    // if(this.form.invalid){
    //   return;
    // }
    //    if(!this.isEditing){
    //      this.doctorService.addDoctor(
    //        this.form.value.firstName,
    //        this.form.value.lastName,
    //        this.form.value.email,
    //        this.form.value.phone,
    //        this.form.value.gender,
    //        this.form.value.speciality,
    //        this.form.value.degree,
    //        this.form.value.state,
    //        this.form.value.image,
    //      )
    //       this.modalService.dismissAll();
    //       this.doctorService.doctorsUpdated
    //       .subscribe(x => {
    //         this.doctorAdded = true;
    //         setTimeout(() => {
              
    //           this.doctorAdded = false;
    //         }, 2000);
    //         this.getDoctors();
    //       });
    //    }
    //    else {
    //     this.doctorService.editDoctor(
    //       this.doctorId,
    //       this.form.value.firstName,
    //       this.form.value.lastName,
    //       this.form.value.email,
    //       this.form.value.phone,
    //       this.form.value.gender,
    //       this.form.value.speciality,
    //       this.form.value.degree,
    //       this.form.value.state,
    //       this.form.value.image,
    //       this.doctorModified.active
    //     )
    //     this.modalService.dismissAll();
    //     this.doctorService.doctorsUpdated
    //     .subscribe(x => {
    //       this.getDoctors();
    //     });

    //    }


  }

  clearForm(){
    this.form.reset();
    
  }

  onPageChanged(pageData : PageEvent){
    this.currentPage = pageData.pageIndex + 1;
    this.doctorPerPage = pageData.pageSize;

  }

  getDoctors(){
   
    this.doctorService.getDoctors(this.doctorPerPage , this.currentPage);
    this.doctorService.doctorsArray
    .subscribe(doctors => {
      this.dataSource = new MatTableDataSource(doctors.doctors);
      this.dataSource.paginator = this.paginator
    })
  }

}
