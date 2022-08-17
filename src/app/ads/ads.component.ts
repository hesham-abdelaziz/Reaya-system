import { Component, OnInit } from '@angular/core';


// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation , Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation , Autoplay]);

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class AdsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
