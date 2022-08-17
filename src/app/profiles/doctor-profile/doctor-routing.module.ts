import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ClinicsComponent } from "./clinics/clinics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DoctorProfile } from "./doctor-profile.component";
import { ReviewsComponent } from "./reviews/reviews.component";

const routes : Routes = [
    {
        path : '' , component : DoctorProfile ,
        children : [
            {
                path : 'dashboard' , component : DashboardComponent,
                data : {state : 'dashboard'}
                
            },
            {
                path : 'appointments' , component : AppointmentsComponent,
                data : {state : 'appointments'}

            },
            {
                path : 'clinics' , component : ClinicsComponent,
                data : {state : 'clinics'}

            },
            {
                path : 'reviews' , component : ReviewsComponent,
                data : {state : 'reviews'}

            },
            {
                path : 'account-settings' , component : AccountSettingsComponent,
                 data : {state : 'settings'}

            },
            {
                path : 'change-password' , component : ChangePasswordComponent,
                data : {state : 'password'}

            },
        ]
    },
    
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class DoctorRouting {}