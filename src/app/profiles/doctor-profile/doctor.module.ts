import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Material } from "src/app/shared/angular-material.module";
import { UserCardComponent } from "src/app/user-card/user-card.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ClinicComponent } from "./clinics/clinic/clinic.component";
import { ClinicsComponent } from "./clinics/clinics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DoctorProfile } from "./doctor-profile.component";
import { DoctorRouting } from "./doctor-routing.module";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SwiperModule } from 'swiper/angular';
import { TimeTableComponent } from "./clinics/time-table/time-table.component";
import { SharedModule } from "src/app/shared/sharedModule.module";
@NgModule({
    declarations : [
        DoctorProfile,
        DashboardComponent,
        AppointmentsComponent,
        ClinicsComponent,
        ReviewsComponent,
        AccountSettingsComponent,
        ChangePasswordComponent,
        ClinicComponent,
        TimeTableComponent
    ]
    , 
    imports : [
        CommonModule,
        RouterModule,
        Material,
        ReactiveFormsModule,
        FontAwesomeModule,
        DoctorRouting,
        SwiperModule,
        SharedModule
    ]
})

export class DoctorModule {}