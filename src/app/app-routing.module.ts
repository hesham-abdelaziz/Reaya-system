import { NgModule } from '@angular/core';

import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';



import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './admin/admin-auth-guard.service';
import { AdsComponent } from './ads/ads.component';
import { DoctorAdPageComponent } from './pages/doctor-ad-page/doctor-ad-page.component';

const appRoutes: Routes = [
{
  path : '' , component  : HomeComponent , 
  data : {state : 'home'}
},
{
  path: 'auth' , loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
},

{
  path : 'admin' , loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate : [AdminGuard]
},


{
path : 'doctor' , loadChildren : () => import('./profiles/doctor-profile/doctor.module').then(m => m.DoctorModule)
},
{
path :'patient' , loadChildren : () => import('./profiles/patient-profile/patient.module').then(m => m.PatientModule),
data : {state : 'patient'}
},
{
path : 'ads' , loadChildren : () => import('./ads/ads.module').then(m => m.AdsMoudle),
data : {state : 'ads'}
},




{
  path : 'doctor/:name' , component : DoctorAdPageComponent,
  data : {state : 'doctor-ad'}
},
 
  {
    path: 'no-access',
    component: NoAccessComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
