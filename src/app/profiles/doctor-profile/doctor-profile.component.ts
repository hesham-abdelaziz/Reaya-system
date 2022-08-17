import { Component } from "@angular/core";
import { DoctorService } from "src/app/admin/doctors/doctor.service";
import { slideAnimate } from "src/app/animations";

@Component({
    selector : 'doctor-profile',
    templateUrl : './doctor-profile.component.html',
    styleUrls : ['./doctor-profile.component.css'],
    animations : [
        slideAnimate
    ]
})

export class DoctorProfile {
  user = JSON.parse(localStorage.getItem('user'));

    message : string = '';
    constructor(doctorService : DoctorService){
        doctorService.doctorsUpdated
        .subscribe(value => {

            console.log(value);
            this.message = value;
            setTimeout(() => {
                    this.message = '';
            }, 3000);
        })
    }


    getState(outlet)  {
		return outlet.activatedRouteData.state;
	}
    scrollUp(){
        window.scrollTo({
            top : 0,
            behavior :'smooth'
        })
    }
}