import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  facebook = faFacebookSquare;
  google = faGooglePlusSquare;
  signUp : FormGroup;
  emailExist : boolean;
  hide = true;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      firstName : new FormControl(null , Validators.required),
      lastName : new FormControl(null , Validators.required),
      email : new FormControl(null , Validators.required),
      password : new FormControl(null , Validators.required)
    });
  }


  createAccount(data){
    this.authService.createAccount(data);
    this.authService.emailExist
    .subscribe(value => {
      this.emailExist = true;
      this.signUp.get('email').setErrors({
        required : true
      })
    })
  }
}
