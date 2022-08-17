import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToggleService } from 'src/app/header/toggle.service';
import { SpecialityService } from './speciality.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SpecialitiesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  totalSpecialites = 0;
specialityPerPage = 5;
currentPage = 1;
pageSizeOptions = [ 2 , 4 , 6 , 8 , 10];
  form : FormGroup;
  isLoading : boolean;
  displayedColumns: string[] = ['name', 'actions'];
  dataSource: MatTableDataSource<any>;
  imagePreivew;
  isEditing : boolean;
  specId;
  speciality;
  MenuToggled : boolean;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal ,
    private specService : SpecialityService ,
    toggleService : ToggleService) {
      config.backdrop = 'static';
      config.keyboard = false;
    config.centered = true;
    toggleService.toggleStatus()
    .subscribe(status => {
      this.MenuToggled = status;
    })
   }

  ngOnInit(): void {
    this.getSpecialites();
    this.isLoading = true;
    this.form = new FormGroup({
      name : new FormControl(null , Validators.required),
      image : new FormControl(null)
    });
    

    this.specService.specialityUpdated
    .subscribe(x => {
      this.getSpecialites();
      this.modalService.dismissAll();
    })
  } 

  pikcImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];

    this.form.patchValue({
      image : file
    });
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreivew = reader.result;
    }
    reader.readAsDataURL(file);
  }

  onPageChanged(pageData : PageEvent){
    this.currentPage = pageData.pageIndex + 1;
    this.specialityPerPage = pageData.pageSize;
    this.specService.getSpecialites(this.specialityPerPage , this.currentPage);

  }

  open(content){
    this.isEditing = false;
    this.modalService.open(content);
  }

  onCreate(){
    if(!this.isEditing){
      this.specService.createSpeciality(this.form.value.name , this.form.value.image);

      this.clearForm();
    }
    else {
      console.log(this.form.value.image);
      this.specService.editSpeciality(this.specId ,  this.form.value.name , this.form.value.image);
      this.clearForm();
    }
  }



  onEdit(content , speciality){
    this.specId = speciality.id
    this.isEditing = true;
    this.modalService.open(content);
    this.specService.getSingleSpeciality(this.specId);
    this.specService.singleSpeciality
    .subscribe(speciality => {
      console.log(speciality);
      this.speciality = {id : speciality._id , name : speciality.name , image : speciality.image}
      this.form.patchValue({
        name : this.speciality.name,
        image : this.speciality.image
      });
      this.imagePreivew = this.speciality.image;
    })
  }

  onDelete(id){
    this.specService.deleteSpeciality(id);
  }


  clearForm(){
    this.form.reset();
    this.imagePreivew = null
  }

  getSpecialites(){
    this.specService.getSpecialites(this.specialityPerPage , this.currentPage);
    this.specService.getAllSpecialites()
    .subscribe(specialites =>{
      this.isLoading = false;
      this.totalSpecialites = specialites.maxNum;
      this.dataSource = new MatTableDataSource(specialites.specialites);
        this.dataSource.paginator = this.paginator;
    })
  }
}
