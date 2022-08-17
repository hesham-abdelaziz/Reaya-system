import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn : 'root'})


export class ImageService {
    url  = environment.baseUrl;
    user = JSON.parse(localStorage.getItem('user'));
    constructor(private http : HttpClient ,
         private authService : AuthService , 
         private toaster : ToastrService ,
         ){}


    changeImage(id , image){
        const formDate : FormData = new FormData();
        formDate.append('image' , image);
        this.http.put<{message : string}>(this.url + "api/user/" + id , formDate)
        .subscribe({
            next : (res) => {
                this.toaster.success(res.message);
                this.authService.getUser(this.user.id);
                setTimeout(() => {
                    location.reload();
                }, 1400);
            }
            ,error : (err : HttpErrorResponse) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        })
    }
}