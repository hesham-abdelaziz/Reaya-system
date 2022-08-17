import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Material } from "src/app/shared/angular-material.module";
import { SharedModule } from "src/app/shared/sharedModule.module";
import { UserCardComponent } from "src/app/user-card/user-card.component";
import { SwiperModule } from "swiper/angular";
import { BasicInfoComponent } from "./basic-info/basic-info.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MedicalRecordsComponent } from "./medical-records/medical-records.component";
import { PatientAppointmentsComponent } from "./patient-appointments/patient-appointments.component";
import { PatientProfileComponent } from "./patient-profile.component";
import { PatientRouting } from "./patient-routing.module";
import { PrescriptionsComponent } from "./prescriptions/prescriptions.component";

@NgModule({
    declarations : [
        PatientProfileComponent,
        PatientAppointmentsComponent,
        PrescriptionsComponent,
        MedicalRecordsComponent,
        BasicInfoComponent,
        ChangePasswordComponent
    ],

    imports : [
        CommonModule,
        RouterModule,
        Material,
        ReactiveFormsModule,
        FontAwesomeModule,
        PatientRouting,
        SwiperModule,
        SharedModule
    ]
})

export class PatientModule {}