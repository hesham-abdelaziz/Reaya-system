import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClinicService } from '../clinic.service';
import { TimeService } from './time.service';
import {formatDate} from '@angular/common'

@Component({
  selector: 'time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class TimeTableComponent implements OnInit {
  @Input() id;
  @Input() clinicId;
  displayedColumns: string[] = ['day', 'from', 'to', 'actions'];
  dataSource : any = [];
  isDeleting : boolean;
  isEditing :boolean;
  isLoading : boolean;
  form : FormGroup;
  time;
  days = [
    {
      day : 'Saturday'
    },
    {
      day : 'Sunday'
    },
    {
      day : 'Monday'
    },
    {
      day : 'Tuesday'
    },
    {
      day : 'Wednesday'
    },
    {
      day : 'Thursday'
    },
    {
      day : 'Friday'
    },
  ]
  constructor(    config: NgbModalConfig,
    private modalService: NgbModal ,
    private timeService : TimeService,
    private clinicService : ClinicService) { 
      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.isLoading = true;
    this.timeService.timeUpdated
    .subscribe(x => {
      console.log(x);
      this.modalService.dismissAll();
      this.getClinic();
    })

    this.getClinic();
    this.form = new FormGroup({
      day : new FormControl(null ,Validators.required),
      from : new FormControl(null ,Validators.required),
      to : new FormControl(null ,Validators.required)
    });
  }

  addTime(content){
    this.isDeleting = false;
    this.isEditing = false;
    this.modalService.open(content)
  }

  onAdd(time){
    if(this.form.invalid){
      return;
    }
    if(!this.time){
      this.timeService.addTime(this.clinicId , time);
    }
   
    else {
      this.timeService.editTime(this.time._id , time);
    }

  }

  clearForm(){
    this.form.reset();
  }



  deleteTime(content , time){
    this.time = time;
    this.isDeleting = true;
    this.isEditing = false;
    this.modalService.open(content);
  }

  editTime(content , time){
    console.log(time);
    this.time = time;
    this.isDeleting = false;
    this.isEditing = true;
    const from = new Date(time.from).toLocaleTimeString();
    const to = new Date(time.to).toLocaleTimeString();

    console.log(from);
    this.form.patchValue({
      day : time.day,
      from :from,
      to : to
    })
    this.modalService.open(content);
  }
  onDelete(){
    this.isLoading = true;
    this.timeService.deleteTime(this.clinicId , this.time);
    this.modalService.dismissAll();
    this.getClinic();
  }


  getClinic(){
    this.isLoading = true;
    this.clinicService.getSingleClinic(this.clinicId);
    this.clinicService.singleClinic
    .subscribe(value => {
      this.dataSource = value.times
      setTimeout(() => {
        this.isLoading = false
      }, 600);
    })
  }
}
