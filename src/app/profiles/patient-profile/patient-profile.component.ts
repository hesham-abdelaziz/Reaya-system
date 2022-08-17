import { Component, OnInit } from '@angular/core';
import { slideAnimate } from 'src/app/animations';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  animations : [
    slideAnimate
]
})
export class PatientProfileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));

  constructor() { }

  ngOnInit(): void {
    
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
