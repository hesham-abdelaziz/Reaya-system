import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from 'src/app/admin/appointments/appointments.service';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class PatientAppointmentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  user = JSON.parse(localStorage.getItem('user'));
  displayedColumns: string[] = ['doctor', 'spec' ,'day', 'date' , 'from'  , 'actions'];
  dataSource: MatTableDataSource<any>;
  isLoading : boolean;
  totalAppointments = 0;
  appointmentsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [ 2 , 4 , 6 , 8 , 10];
  appointment;
  constructor(private appointService : AppointmentService ,
    config: NgbModalConfig,
    private modalService: NgbModal ,) { }

  ngOnInit(): void {
    this.getAppointments();
    this.appointService.cancled
    .subscribe(x => {
      this.getAppointments();
      this.modalService.dismissAll();
    })

  }

  onPageChanged(pageData : PageEvent){


  }


  cancelAppointment(content , appointment){
    this.appointment = appointment;
    this.modalService.open(content)
  }
  
  onCancel(){
    this.appointService.cancelAppointment(this.user.id , this.appointment);
  }

  getAppointments(){
    this.isLoading = true;
    this.appointService.getPatientAppointments(this.user.id , this.appointmentsPerPage , this.currentPage);
    this.appointService.appointments
    .subscribe(x => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(x.appointments);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });


    })
  }
}
