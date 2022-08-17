import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {  Pagination, Navigation  } from "swiper";

// install Swiper modules
SwiperCore.use([ Pagination, Navigation]);
@Component({
  selector: 'clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ClinicDetailsComponent implements OnInit {
  @Input() clinic;
  @Input() doctor;
  constructor() { }

  ngOnInit(): void {
    console.log(this.clinic);
    console.log(this.doctor);
  }

}
