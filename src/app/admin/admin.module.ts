import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Material } from "../shared/angular-material.module";
// import { NgPrime } from "../shared/angular-NgPrime.module";
import { AdminRouting } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { CountryComponent } from "./country/country.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { PatientsComponent } from "./patients/patients.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SpecialitiesComponent } from "./specialities/specialities.component";

@NgModule({
    declarations : [
        AdminComponent,
        DashboardComponent,
        AppointmentsComponent,
        SpecialitiesComponent,
        DoctorsComponent,
        PatientsComponent,
        ReviewsComponent,
        CountryComponent
        
    ],

    imports : [
        CommonModule,
        ReactiveFormsModule,
        Material,
        // NgPrime,
        AdminRouting
    ]
})

export class AdminModule {}