import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})



export class ClinicService {
    url = environment.baseUrl;
    clinicsArray = new Subject<any>();
    singleClinic = new Subject<any>();
    clinicsUpdated = new Subject<any>();
    constructor(private http : HttpClient , private toastr: ToastrService){}

    getClinics(id){
        this.http.get(this.url + "api/clinic/" + id)
        .subscribe({
            next : (res) => {
                this.clinicsArray.next(res);
            }
            , error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    getSingleClinic(id){
        this.http.get(this.url + "api/clinic/single/" + id)
        .subscribe({
            next : (res) => {
                this.singleClinic.next(res)
            }
            , error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    addClinic(
        name,
        address,
        phone,
        price,
        images,
        services,
        doctorId
    )
    {
        const formData : FormData = new FormData();

        formData.append('name' , name);
        formData.append('address' , address);
        formData.append('phone' , phone);
        formData.append('price' , price);
        for(let image of images){
            formData.append('image' , image , name);
        }
   
        for(let service of services){
            formData.append('services' , service);
        }
        
        formData.append('doctorId' , doctorId);
        
        this.http.post(this.url + "api/clinic/add" , formData)
        .subscribe({
            next :(res)=>{
                console.log(res);
                this.toastr.success('Clinic added successfully' , '' , {
                    positionClass : 'toast-top-center'
                })
                this.clinicsUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    editClinic(
        clinicId ,
        name,
        address,
        phone,
        price,
        images : File | any,
        services,
        doctorId ){
            // console.log(images.image);
            let formData : FormData | any = new FormData();
         
            if(typeof images === 'object'){

                formData.append('_id' , clinicId)
                formData.append('name' , name);
                formData.append('address' , address);
                formData.append('phone' , phone);
                formData.append('price' , price);
                
                for(let image of images){
                    formData.append('image' , image.image);
                }

                for(let service of services){
                    formData.append('services' , service);
                }
            formData.append('doctorId' , doctorId);
            }

            else {
                formData = {
                    clinicId  : clinicId,
                    name : name,
                    address : address,
                    phone : phone ,
                    price :price,
                    images : images,
                    services : services,
                    doctorId : doctorId
                }
            }
            
  
            
            this.http.put(this.url + "api/clinic/edit/" + clinicId , formData)
            .subscribe({
                next :(res)=>{
                    console.log(res);
                    this.clinicsUpdated.next(true);
                },
                error : (err : HttpErrorResponse) => {
                    console.log(err);
                }
            })
    }

    deleteClinic(id){
        this.http.delete<{message : string}>(this.url + "api/clinic/delete/" + id)
        .subscribe({
            next :(res)=>{
                this.toastr.success(res.message);
                this.clinicsUpdated.next(true)
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }
}