import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/admin/appointments/appointments.service';
import { CountryService } from 'src/app/admin/country/country.service';
import { ClinicService } from 'src/app/profiles/doctor-profile/clinics/clinic.service';

@Component({
  selector: 'doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css'],
  providers: [NgbModalConfig, NgbModal],

})
export class DoctorCardComponent implements OnInit, OnDestroy {
  user = JSON.parse(localStorage.getItem('user'));

  @Input() doctor;
  @Input() clinic;
  form : FormGroup;
  govSub: Subscription;
  gov : any;
  exist : boolean = false;
  appointmentDay;
  appointDate;
  pickedDate;
  minDate = new Date(); //minDate is today
  maxDate = new Date(2023, 7, 7); //maxDate is 6th Jan 2023
  constructor(
    private countryService: CountryService,
    private clinicService: ClinicService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private toaster : ToastrService ,
    private appointService : AppointmentService) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit(): void {
    this.form = new FormGroup({
      date : new FormControl(null , Validators.required)
    })
    this.govSub = this.countryService.governorate
      .subscribe(x => {
        this.gov = x;
      });

    this.clinicService.singleClinic
      .subscribe(x => {
        console.log(x);
      })


      this.appointService.booked
      .subscribe(x => {
        this.modalService.dismissAll();
      })
  }

  ngOnDestroy(): void {
    this.govSub.unsubscribe();
  }


  onBooking(content) {
    this.modalService.open(content);
  }


  pickDate(event) {
    let dayExtracted = new Date(event.value).getDay();
    this.pickedDate = event.value;
    let day;
    switch (dayExtracted) {
      case 0:
        day = 'Sunday'
        break;

      case 1:
        day = 'Monday'
        break;

      case 2:
        day = 'Tuesday'
        break;
      case 3:
        day = 'Wednesday'
        break;
      case 4:
        day = 'Thursday'
        break;
      case 5:
        day = 'Friday'
        break;
      case 6:
        day = 'Saturday'
        break;
    }
    this.appointmentDay = this.clinic.times.filter(time => time.day == day);

    if (this.appointmentDay.length > 0) {
      this.exist = true;
    }
    else {
      this.exist = false;
      this.toaster.error('This day doesn\'t exist in the available times!')
      return;
    }
  }

  bookAppointment(){
    if(!this.pickedDate){
      return;
    }
     this.appointDate = {
        day : {...this.appointmentDay},
      pickedDate :  this.pickedDate
    }
    this.appointService.bookAppointment(this.clinic._id , this.user , this.doctor ,this.appointDate)
  }

  clearForm(){
    this.form.reset();
  }
}
