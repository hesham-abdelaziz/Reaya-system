import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })



export class AppointmentService {
    url = environment.baseUrl;
    booked = new Subject<any>();
    appointments = new Subject<any>();
    cancled = new Subject<any>();
    constructor(
        private http: HttpClient,
        private toaster: ToastrService,
    ) { }

    getPatientAppointments(id , appointmentsPerPage , currentPage) {
        const queryParams = `?pagesize=${appointmentsPerPage}&page=${currentPage}`

        this.http.get(this.url + "api/user/appointments/" + id + queryParams)
        .subscribe({
            next: (res) => {
                console.log(res);
                this.appointments.next(res);
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    cancelAppointment(patientId , appointment){
        this.http.put<{message : string}>(this.url + "api/clinic/cancel/" + patientId , appointment)
        .subscribe({
            next: (res) => {
                this.toaster.success(res.message)
                this.cancled.next(true)
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    bookAppointment(clinicId, patient, doctor ,appointmentDay) {
        this.http.put<{ message: string }>(this.url + "api/clinic/appointment/" + clinicId, { patient, doctor , appointmentDay })
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.toaster.success(res.message);
                    this.booked.next(true);
                },
                error: (err: HttpErrorResponse) => {
                    console.log(err);
                    this.toaster.error(err.error.message);
                }
            })
    }
}