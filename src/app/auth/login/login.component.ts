import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  facebook = faFacebookSquare;
  google = faGooglePlusSquare;
  logIn : FormGroup;
  inactive;
  hide = true
  isLogging : boolean;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.logIn = new FormGroup({
      email : new FormControl(null , Validators.required),
      password : new FormControl(null , Validators.required)
    });
  }


  log(data){
    this.isLogging = true;
    this.authService.logIn(data);
    this.authService.status
    .subscribe(value => {
      this.isLogging = false;
      if (value =='active'){
        console.log('active account');
        this.inactive = false;
      }
      else {
        console.log('inactive account');
        this.inactive = true;
      }
    })
  }
}
