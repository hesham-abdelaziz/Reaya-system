import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpecialityService } from 'src/app/admin/specialities/speciality.service';

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination])
@Component({
  selector: 'spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SpecListComponent implements OnInit , OnDestroy {
  specialites = [];
  specSub : Subscription
  constructor(private specService : SpecialityService) { }

  ngOnInit(): void {
    this.specService.getAll();
   this.specSub =  this.specService.specialityArray
    .subscribe(x => {
      this.specialites = x;
    })
  }

  ngOnDestroy(): void {
      this.specSub.unsubscribe();
  }
}
