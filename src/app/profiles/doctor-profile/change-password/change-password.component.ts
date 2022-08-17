import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/admin/doctors/doctor.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'))
  form : FormGroup;
  message : string = '';
  constructor(private doctorService : DoctorService) {
 
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      oldPassword : new FormControl(null , Validators.required),
      newPassword : new FormControl(null , Validators.required),
      repeatPassword : new FormControl(null , Validators.required)
    });

    this.doctorService.errorSub
    .subscribe(value => {
      this.message = value;
      this.form.get('oldPassword').setErrors({
        'required' : true
      })
    })
  }

  change(data){
    if(this.form.invalid){
      return;
    }
    this.doctorService.changePassword(this.user.id , data);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }
}
