import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})


export class AdService {
    url = environment.baseUrl;
    adPublished = new Subject<any>();
    adDeleted = new Subject<any>();
    adsArray = new Subject<any>();
    filterdArray = new Subject<any>();
    constructor(private http : HttpClient , private toastr: ToastrService){}

    getAllAds(){
        this.http.get(this.url + "api/ads")
        .subscribe({
            next : (res)=>{
                this.adsArray.next(res)
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    filterAds(degree? , speciality? , gender? , price? ){
        this.http.get(this.url + "api/ads/filter/" +  degree + "/" + speciality + "/" + gender + "/" + price )
        .subscribe({
            next : (res)=>{
                this.adsArray.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    addNew(clinic , doctor , discount){
        this.http.post<{data : string , message : string}>(this.url + "api/ads/new" , {clinic , doctor, discount})
        .subscribe({
            next : (res)=>{
                console.log(res);
                this.adPublished.next(true);
                this.toastr.success(res.message);
            },
            error : (err : HttpErrorResponse) => {
                if(err.error.message.name == "ValidationError"){
                    this.toastr.error('Ad exists for this clinic!')
                }
            }
        })
    }


    deleteAd(id) {
        this.http.delete<{message : string}>(this.url + "api/ads/" + id )
        .subscribe({
            next : (res)=>{
                console.log(res);
                this.adDeleted.next(true);
                this.toastr.success(res.message)
            },
            error : (err : HttpErrorResponse) => {
               console.log(err);
            }
        })
    }
}