import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import SwiperCore, { EffectCoverflow, Navigation, Pagination,  Grid, SwiperOptions } from 'swiper';
import { ClinicService } from '../clinic.service';
import { AdService } from './ads.service';

SwiperCore.use([Navigation , Pagination , EffectCoverflow , Grid]);

@Component({
  selector: 'clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClinicComponent implements OnInit , OnDestroy{
  user = JSON.parse(localStorage.getItem('user'));
 @Input() id;
 percent = faPercent;
 form : FormGroup;
 url : string = environment.baseUrl;
 clinic : any = [];
 value : boolean = false;
 isDeleting : boolean;
 clinicSub : Subscription;
 @Output() edit = new EventEmitter();
 @Output() delete = new EventEmitter();
  constructor(private clinicService : ClinicService , 
        config: NgbModalConfig,
    private modalService: NgbModal ,
    private adService : AdService) { 
      config.backdrop = 'static';
  config.keyboard = false;
    }

  ngOnInit(): void {
    this.form = new FormGroup({
      discount : new FormControl(null , Validators.required)
    })
    this.form.get('discount').disable();
 
    this.getClinic();
    this.adService.adPublished
    .subscribe(x => {
      this.getClinic();
      this.modalService.dismissAll();
    });
    this.adService.adDeleted
    .subscribe(x => {
      this.getClinic();
      this.modalService.dismissAll();
    })
  }
  ngOnDestroy(): void {
    this.clinicSub.unsubscribe();
  }

  toggle(event : any){
    this.value = event.checked;
    if(this.value){
      this.form.get('discount').enable();
    }
    else {
      this.form.get('discount').disable();

    }
  }
  editClinic(){
    this.edit.next(this.clinic)
  }
  deleteClinic(){
    this.delete.next(this.clinic)
  }

  onPublish(content){
    this.isDeleting = false;
    if(this.clinic.times.length == 0){
      return;
    }
    this.modalService.open(content);
  }
  
  onDelete(content) {
    this.isDeleting = true;
    this.modalService.open(content);
  }
  publishAd(discountValue?){
    if(!this.isDeleting) {
      let discount = discountValue;
      this.adService.addNew(this.clinic ,this.user ,discount);
    }
    else {
      this.adService.deleteAd(this.clinic._id);
    }
  }

  getClinic(){
    this.clinicService.getSingleClinic(this.id);
    this.clinicSub = this.clinicService.singleClinic
    .subscribe(value => {
      console.log(value);
      this.clinic = value;
    })
  }
}
