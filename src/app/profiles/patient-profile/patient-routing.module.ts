import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicInfoComponent } from "./basic-info/basic-info.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MedicalRecordsComponent } from "./medical-records/medical-records.component";
import { PatientAppointmentsComponent } from "./patient-appointments/patient-appointments.component";
import { PatientProfileComponent } from "./patient-profile.component";
import { PrescriptionsComponent } from "./prescriptions/prescriptions.component";

const routes : Routes = [
    {
        path : '' , component : PatientProfileComponent,
        children : [
            {
                path : '' , redirectTo : 'appointments' , pathMatch : 'full'
            },
            {
                path : 'appointments' , component : PatientAppointmentsComponent,
                data : {state : 'appointments'}
            },
            {
                path : 'prescriptions' , component : PrescriptionsComponent,
                data : {state : 'prescriptions'}
            },
            {
                path : 'medical-records' , component : MedicalRecordsComponent,
                data : {state :'records'}
            },
            {
                path : 'basic-info' , component : BasicInfoComponent,
                data : {state :'info'}
            },
            {
                path : 'change-password' , component : ChangePasswordComponent,
                data : {state :'password'}
            },
        ]
    },
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class PatientRouting {}