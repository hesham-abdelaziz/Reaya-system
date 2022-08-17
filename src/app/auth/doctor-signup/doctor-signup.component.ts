import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/admin/country/country.service';
import { DoctorService } from 'src/app/admin/doctors/doctor.service';
import { SpecialityService } from 'src/app/admin/specialities/speciality.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class DoctorSignupComponent implements OnInit , OnDestroy , AfterViewInit {
  personalInfo : FormGroup;
  secondFormGroup : FormGroup;
  imagePreivew;
  specialities : Array<any> = [];
  governorates : Array<any> = [];
  cities : any = [];
  specSub : Subscription;
  countrySub : Subscription;

  isLoading : boolean;
  loadingGov : boolean;
  direction : any = ''
  constructor(private specService : SpecialityService , 
    private countryService : CountryService ,
    private doctorService : DoctorService) { }

  ngOnInit(): void {
    this.loadingGov = true;
    this.specService.getAll();
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

    this.specSub =this.specService.specialityArray
    .subscribe(x => {
      this.specialities = x;
    })
    this.personalInfo = new FormGroup({
      firstName : new FormControl(null , Validators.required),
      lastName : new FormControl(null , Validators.required),
      phone : new FormControl(null , Validators.required),
      email : new FormControl(null ,[ Validators.required , Validators.email]),
      password : new FormControl(null , Validators.required),
      image : new FormControl(null)
    })

    this.secondFormGroup = new FormGroup({
      speciality : new FormControl(null , Validators.required),
      governorate : new FormControl(null , Validators.required),
      city : new FormControl(null , Validators.required),
      gender : new FormControl(null , Validators.required),
      degree : new FormControl(null , Validators.required),
      regNumber : new FormControl(null , Validators.required),
      taxID : new FormControl(null , Validators.required)
    })

    let media =  window.matchMedia('(max-width : 992px)')
    
    if(media.matches){
      this.direction = 'vertical'
      
    }
    else {
      this.direction = 'horizontal'
    }

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
        this.specSub.unsubscribe();
  }

  pickImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];

    this.personalInfo.patchValue({
      image : file
    });
    this.personalInfo.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreivew = reader.result;
    }
    reader.readAsDataURL(file);
    
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

  createAccount(){
    console.log(this.personalInfo.value);
    console.log(this.secondFormGroup.value);
    this.doctorService.addDoctor(
      this.personalInfo.value.image,
      this.personalInfo.value.firstName,
      this.personalInfo.value.lastName,
      this.personalInfo.value.phone,
      this.personalInfo.value.email,
      this.personalInfo.value.password,
      this.secondFormGroup.value.speciality,
      this.secondFormGroup.value.governorate,
      this.secondFormGroup.value.city,
      this.secondFormGroup.value.gender,
      this.secondFormGroup.value.degree,
      this.secondFormGroup.value.regNumber,
      this.secondFormGroup.value.taxID,
    )
  }
}
