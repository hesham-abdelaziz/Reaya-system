import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { PatientsComponent } from "./patients/patients.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SpecialitiesComponent } from "./specialities/specialities.component";
import { CountryComponent } from "./country/country.component";

const routes : Routes = [
    {
        path : '' , redirectTo : 'dashboard' , pathMatch : 'full'
    },
    {
        path : 'dashboard' , component : DashboardComponent
    },
    {
        path : 'appointments' , component : AppointmentsComponent
    },
    {
        path : 'specialites' , component : SpecialitiesComponent
    },
    {
        path : 'doctors' , component : DoctorsComponent
    },
    {
        path : 'patients' , component : PatientsComponent
    },
    {
        path : 'reviews' , component : ReviewsComponent
    },
    {
        path : 'country' , component : CountryComponent
    },
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})


export class AdminRouting {}