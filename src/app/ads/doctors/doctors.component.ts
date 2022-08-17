import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { show } from 'src/app/animations';
import { AdService } from 'src/app/profiles/doctor-profile/clinics/clinic/ads.service';

import SwiperCore, {  Pagination, Navigation  } from "swiper";

// install Swiper modules
SwiperCore.use([ Pagination, Navigation]);
@Component({
  selector: 'doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  animations : [
    show
  ]
})
export class DoctorsAdsComponent implements OnInit , OnDestroy {
  ads : Array<any> = [];
  adSub : Subscription;
  isLoading : boolean;
  constructor(
    private adService : AdService ,
     private router : Router ,
     ) { }

  ngOnInit(): void {
    this.adService.getAllAds();
   this.adSub = this.adService.adsArray
    .subscribe(x => {
      this.isLoading = true;
      console.log(x);
      setTimeout(() => {
        this.isLoading  = false;
      }, 1000);
      this.ads = x;
    })

    this.adService.filterdArray
    .subscribe(x => {
      this.ads = x;
    })
  }

  ngOnDestroy(): void {
        this.adSub.unsubscribe();
  }

 

  navigateToProfile(doctor , clinic){ 
  sessionStorage.setItem('id' , doctor[0].id);
  sessionStorage.setItem('clinic' , clinic);
  this.router.navigate([`/doctor/${doctor[0].name}`])
  }
}
