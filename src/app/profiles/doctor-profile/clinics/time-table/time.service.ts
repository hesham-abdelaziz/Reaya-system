import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })


export class TimeService {
    url: string = environment.baseUrl;
    timeUpdated =  new BehaviorSubject<any>(false);
    constructor(private http: HttpClient , private toastr: ToastrService) {}

    addTime(clinicId , time){
        this.http.post(this.url + "api/clinic/time/" +clinicId , time)
        .subscribe({
            next :(res) => {
                this.timeUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                this.showErr(err.error.message);
            }
        })
    }

    showErr(msg){
        this.toastr.error(msg)
    }

    editTime(timeId , time){
        this.http.put(this.url + "api/clinic/edit/time/" + timeId , time)
        .subscribe({
            next :(res) => {
                console.log(res);
                this.timeUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    deleteTime(clinicId , time){
        this.http.put(this.url + "api/clinic/delete/time/" + clinicId , time)
        .subscribe({
            next :(res) => {
                console.log(res);
                this.timeUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }
    
}