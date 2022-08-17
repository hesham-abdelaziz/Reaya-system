import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SwiperModule } from "swiper/angular";
import { DoctorRouting } from "../profiles/doctor-profile/doctor-routing.module";
import { Material } from "../shared/angular-material.module";
import { AdsRouting } from "./ads-routing.module";
import { AdsComponent } from "./ads.component";
import { DoctorsAdsComponent } from "./doctors/doctors.component";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
    declarations : [
    AdsComponent,
        DoctorsAdsComponent,
        FilterComponent
    ],

    imports : [
        CommonModule,
        RouterModule,
        Material,
        ReactiveFormsModule,
        FontAwesomeModule,
        DoctorRouting,
        SwiperModule,
        AdsRouting
    ]
})


export class AdsMoudle {}