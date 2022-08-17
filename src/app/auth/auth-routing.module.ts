import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorSignupComponent } from "./doctor-signup/doctor-signup.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";


const routes : Routes = [
    {
        path : '' , redirectTo : 'login' , pathMatch : 'full'
    },
    {
        path : 'login' , component : LoginComponent,
    data : {state : 'login'},

    },

    {
        path : 'signup' , component : SignupComponent,
    data : {state : 'signup'},

    },
    {
        path : 'doctor/signup' , component : DoctorSignupComponent,
         data : {state : 'signup'},

    }
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})


export class AuthRouting {}