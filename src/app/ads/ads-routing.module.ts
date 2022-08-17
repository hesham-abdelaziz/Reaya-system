import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdsComponent } from "./ads.component";
import { DoctorsAdsComponent } from "./doctors/doctors.component";

const routes : Routes = [
    {
        path : '' , component : AdsComponent,
        children : [
            {
                path : 'doctors' , component : DoctorsAdsComponent
            }
        ]
    },
   
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})


export class AdsRouting {}