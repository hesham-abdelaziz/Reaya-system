import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { SpecialityService } from 'src/app/admin/specialities/speciality.service';
import { AdService } from 'src/app/profiles/doctor-profile/clinics/clinic/ads.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @ViewChild('card') card : ElementRef;
  @ViewChild('overlay') overlay : ElementRef;
  specialities : Array<any> = [];
  ads = [];
  @Output() degree = new EventEmitter();
  @Output() speciality = new EventEmitter();
  @Output() gender = new EventEmitter();
  @Output() price = new EventEmitter();
  filter = {
    degree : '',
    spec : '',
    gender : '',
    price : ''
  }
  constructor(
    private specService : SpecialityService,
    private adService : AdService) { }

  ngOnInit(): void {
    this.specService.getAll();
    this.specService.specialityArray
    .subscribe(x =>{
      this.specialities = x;
    });

    this.adService.adsArray
    .subscribe(x => {
      this.closeCard();
    })
  }

  toggleCard(){
    this.card.nativeElement.classList.toggle('active');
    this.overlay.nativeElement.classList.toggle('show');
    document.body.style.overflow ="hidden"
  }

  closeCard(){
    this.card.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('show');
    document.body.style.overflow ="auto"
  }

  filterAds(degree? , speciality? , gender? , price?){
    if(degree && !speciality && !gender && !price){
     this.filter.degree = degree
      this.adService.filterAds(this.filter.degree , null , null , null);
    }
    else if (degree && speciality && !gender && !price){
     this.filter.degree = degree
     this.filter.spec = speciality
      this.adService.filterAds(this.filter.degree , this.filter.spec , null , null);
    }
    else if(degree && speciality && gender && !price){
      this.adService.filterAds(degree , speciality , gender , null);
    }
    else if(degree && speciality && gender && price){
      this.adService.filterAds(degree , speciality , gender , price);
    }

    else if(!degree && speciality && !gender && !price){
      this.adService.filterAds(null , speciality , null , null);
    }
    else if(!degree && !speciality && gender && !price){
      this.adService.filterAds(null , null , gender , null);
    }
    else if(!degree && speciality && gender && !price){
      this.adService.filterAds(null , speciality , gender , null);
    }
    else if(degree && speciality && gender && !price){
      this.adService.filterAds(degree , speciality , gender , null);
    }

  }

}
