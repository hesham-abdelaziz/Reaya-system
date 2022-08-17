import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Material } from "../shared/angular-material.module";
import { AuthRouting } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { DoctorSignupComponent } from "./doctor-signup/doctor-signup.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations : [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        DoctorSignupComponent
    ],
    imports : [
        CommonModule,
        AuthRouting,
        Material,
        ReactiveFormsModule,
        FontAwesomeModule,

    ]
})



export class AuthModule {}