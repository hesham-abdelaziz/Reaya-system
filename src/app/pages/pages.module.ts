import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SwiperModule } from "swiper/angular";
import { Material } from "../shared/angular-material.module";
import { SharedModule } from "../shared/sharedModule.module";
import { ClinicDetailsComponent } from "./doctor-ad-page/clinic-details/clinic-details.component";
import { ClinicTimesComponent } from "./doctor-ad-page/clinic-details/clinic-times/clinic-times.component";
import { DoctorAdPageComponent } from "./doctor-ad-page/doctor-ad-page.component";
import { DoctorCardComponent } from "./doctor-ad-page/doctor-card/doctor-card.component";

@NgModule({
    declarations : [
        DoctorAdPageComponent,
        DoctorCardComponent,
        ClinicDetailsComponent,
        ClinicTimesComponent
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        Material,
        SwiperModule,
        SharedModule
    ]

})

export class PagesModule {}