import { ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class MedicalRecordsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER];

  form : FormGroup;
  displayedColumns: string[] = ['name' , 'actions'];
  dataSource: MatTableDataSource<any>;
  diseasesArray = [];
  drugsArray = [];
  operationsArray = [];
  constructor(    config: NgbModalConfig,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl('' , Validators.required),
      chronic_diseases : new FormControl(''),
      drugs : new FormControl(''),
      operations : new FormControl(''),
      files : new FormControl('')
    })
  }


  addRecord(content){
    this.modalService.open(content);
  }

  addDiseases(event : MatChipInputEvent){
    const value = (event.value || '').trim();

    if(value){
      this.diseasesArray.push(value)
    }

    event.chipInput!.clear();

    this.form.get('chronic_diseases').setValue(null)
  }

  removeDisease(disease){
    const index = this.diseasesArray.indexOf(disease);

    if(index >=0){
      this.diseasesArray.splice(index , 1)
    }
  }

  addDrugs(event : MatChipInputEvent){
    const value = (event.value || '').trim();

    if(value){
      this.drugsArray.push(value)
    }

    event.chipInput!.clear();

    this.form.get('drugs').setValue(null)
  }

  removeDrug(drug){
    const index = this.drugsArray.indexOf(drug);

    if(index >=0){
      this.drugsArray.splice(index , 1)
    }
  }

  addOperations(event : MatChipInputEvent){
    const value = (event.value || '').trim();

    if(value){
      this.operationsArray.push(value)
    }

    event.chipInput!.clear();

    this.form.get('drugs').setValue(null)
  }

  removeOperation(operation){
    const index = this.operationsArray.indexOf(operation);

    if(index >=0){
      this.operationsArray.splice(index , 1)
    }
  }



  onAdd(){

  }

  pickFile(event : Event){
    let files = (event.target as HTMLInputElement).files;

    console.log(files);
  }

  resetForm(){
    this.form.reset();
  }

}
