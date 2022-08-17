import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, map, Observable } from 'rxjs';
import { CountryService } from 'src/app/admin/country/country.service';
import { DoctorService } from 'src/app/admin/doctors/doctor.service';
import { ClinicService } from 'src/app/profiles/doctor-profile/clinics/clinic.service';

@Component({
  selector: 'app-doctor-ad-page',
  templateUrl: './doctor-ad-page.component.html',
  styleUrls: ['./doctor-ad-page.component.css']
})
export class DoctorAdPageComponent implements OnInit {
  doctorId;
  clinicId;
  selectedDoctor;
  selectedClinic;
  observable: Observable<any>;
  isLoading: boolean;
  constructor(
    private doctorService: DoctorService,
     private clinicService: ClinicService ,
     private countryService : CountryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.doctorId = sessionStorage.getItem('id');
    this.clinicId = sessionStorage.getItem('clinic');
    this.doctorService.getSingleDoctor(this.doctorId);
    this.clinicService.getSingleClinic(this.clinicId);
    
    
    let doctor = this.doctorService.singleDoctor.pipe(map(res => res

  ))
    let clinic = this.clinicService.singleClinic.pipe(map(res => res))
    
    combineLatest([doctor, clinic])
      .subscribe(([doc, clin ]) => {
        this.isLoading = false;
        this.selectedDoctor = doc;
        this.selectedClinic = clin;
        this.countryService.getGovernorate(doc.governorate)
      })

  }

}
