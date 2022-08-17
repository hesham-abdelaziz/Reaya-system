import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/admin/country/country.service';
import { DoctorService } from 'src/app/admin/doctors/doctor.service';
import { SpecialityService } from 'src/app/admin/specialities/speciality.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  doctor;
  form : FormGroup;
  specialites;

  governorates : Array<any> = [];
  cities : any = [];
  specSub : Subscription;

  isLoading : boolean;
  loadingGov : boolean;
  constructor(
    private doctorService : DoctorService ,
    specService : SpecialityService,
   private countryService : CountryService ,
   private fb : FormBuilder) {
      specService.getAll();
      specService.specialityArray
      .subscribe(x => {
        this.specialites = x;
      });

     }

  ngOnInit(): void {
    this.loadingGov = true;


    this.form = this.fb.group({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      phone : new FormControl(),
      about : new FormControl(),
      degree : new FormControl(),
      speciality : new FormControl(),
      governorate : new FormControl(),
      city : new FormControl(),
      experiences : this.fb.array([])
    })
    

    this.doctorService.getSingleDoctor(this.user.id);
    this.doctorService.singleDoctor
    .subscribe(doctor => {
      console.log(doctor);
      this.doctor = doctor
      this.isLoading = true;
      this.countryService.getCities(doctor.governorate)
      .subscribe({
        next : (res) => {
          this.isLoading = false;
          this.cities = res;
        },
        error : (err : HttpErrorResponse) => {
          console.log(err);
        }
      })
      this.form.patchValue({
        firstName : doctor.firstName,
        lastName : doctor.lastName,
        email : doctor.email,
        phone : doctor.phone,
        about : doctor.about,
        degree : doctor.degree,
        speciality : doctor.speciality,
        governorate : doctor.governorate,
        city : doctor.city
      })
      if(doctor.experiences.length > 0){
        console.log('experience exist!');
        for(let i =0; i < doctor.experiences.length; i++){
          this.appendExperience(
            doctor.experiences[i].position,
            doctor.experiences[i].location,
            doctor.experiences[i].from,
            doctor.experiences[i].to,
          )
        }
      }
      else {
    this.addExperience();
      }
    });


    this.countryService.getAll()
    .subscribe({
      next : (res) => {
        this.loadingGov = false;
        this.governorates = res[0].data;
      },
      error : (err :HttpErrorResponse) => {
        console.log(err);
      }
    })

  }

  get experiences() : FormArray{
        
    return this.form.get('experiences') as FormArray;
}

  addExperience(){
    this.experiences.push(
      new FormGroup({
        position : new FormControl(''),
        location : new FormControl(''),
        from : new FormControl(''),
        to : new FormControl('')
    })
    )
  }

  appendExperience(position , location , from : any , to : any){
    let formControls = new FormGroup({
      position : new FormControl(position),
      location : new FormControl(location),
      from : new FormControl(new DatePipe("en-US").transform(to,'MM-dd-yyyy')),
      to : new FormControl(new DatePipe("en-US").transform(to,'MM-dd-yyyy'))
    });

    formControls.controls['from'].setValue(from);
    formControls.controls['to'].setValue(to);

    this.experiences.push(formControls)
  }


  update(data){
    this.doctorService.doctorUpdate(this.user.id , data);
    window.scrollTo({
      top : 0,
      behavior :'smooth'
    });
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

  
  getCities(gov){
    this.isLoading = true;
    this.cities = [];
    this.countryService.getCities(gov)
    .subscribe({
      next : (res) => {
        this.isLoading = false;
        this.cities = res;
      },
      error : (err : HttpErrorResponse) => {
        console.log(err);
      }
    })

  }

  delete(i){
    this.experiences.removeAt(i)
  }
}
