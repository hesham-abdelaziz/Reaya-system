import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { map, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})


export class DoctorService {
    url = environment.baseUrl;
    doctorsArray = new Subject<any>();
    singleDoctor = new Subject<any>();
    doctorsUpdated = new Subject<any>();
    errorSub = new Subject<any>();
    constructor(private http : HttpClient ,
         private toastr: ToastrService ,
         private router : Router){}


    getDoctors(doctorsPerPage : number , currentPage : number){

        const queryParams = `?pagesize${doctorsPerPage}&page${currentPage}`

        this.http.get<{data : any , maxNum : number}>(this.url + "api/doctor" + queryParams)
        .pipe(map((res : any) => {
            return {
                doctors : res.doctors.map(doctor => {
                    return {
                        name : doctor.firstName + ' ' + doctor.lastName,
                        image : doctor.image,
                        speciality : doctor.speciality,
                        id : doctor._id,
                        active : doctor.active,
                        gender : doctor.gender
                    }
                }),
                maxNum : res.maxNum
            }
        }))
        .subscribe({
            next : (res) => {
                console.log(res);
                this.doctorsArray.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    addDoctor(
        image,
        firstName,
        lastName,
        phone,
        email,
        password,
        speciality,
        governorate,
        city,
        gender,
        degree,
        regNumber,
        taxID,
        
    )
    {
        const formData : FormData = new FormData;
        if(image){
            formData.append('image' , image , firstName+lastName);
        }
        else {
            
            formData.append('image' , null);
        }
        formData.append('firstName' , firstName);
        formData.append('lastName' , lastName);
        formData.append('phone' , phone);
        formData.append('email' , email);
        formData.append('password' , password);
        formData.append('speciality' , speciality);
        formData.append('governorate' , governorate);
        formData.append('city' , city);
        formData.append('gender' , gender);
        formData.append('degree' , degree);
        formData.append('regNumber' , regNumber);
        formData.append('taxID' , taxID);

        this.http.post<{message : string}>(this.url + "api/doctor/create" , formData)
        .subscribe({
            next : (res) => {
                console.log(res);
                // this.toastr.success(res.message);
                this.doctorsUpdated.next(true);
                this.router.navigate(['/auth/login'])
                
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }



    disableDoctor(id) {
        this.http.put(this.url + "api/doctor/disable/" + id , [])
        .subscribe({
            next : (res) => {
                console.log(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
        
    }


    enableDoctor(id) {
        this.http.put(this.url + "api/doctor/enable/" + id , [])
        .subscribe({
            next : (res) => {
                console.log(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    getSingleDoctor(id){
        this.http.get<{data : string}>(this.url + "api/doctor/" + id)
        .pipe(map((res : any) => {
            return {
                firstName : res.firstName,
                lastName : res.lastName,
              name : res.firstName + " " + res.lastName,
              email : res.email,
              phone : res.phone,
              degree : res.degree,
              speciality : res.speciality,
              image : res.image,
              gender : res.gender,
              governorate : res.governorate,
              city : res.city,
             about : res.about,
             experiences : res.experiences
            }
        }))
        .subscribe({
            next : (res) => {
                // console.log(res);
                this.singleDoctor.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    editDoctor(
        id,
        firstName,
        lastName,
        email,
        phone,
        gender,
        speciality,
        degree,
        state,
        image,
        active,
    )
    {
        let formData : FormData | any = new FormData();
        if( typeof image  === "object"){

            formData.append('id' , id);
            formData.append('firstName' , firstName);
            formData.append('lastName' , lastName);
            formData.append('email' , email);
            formData.append('phone' , phone);
            formData.append('gender' , gender);
            formData.append('speciality' , speciality);
            formData.append('degree' , degree);
            formData.append('state' , state);
          formData.append('image' , image , firstName+lastName);
        formData.append('active' , active);

        }
        
        else {
            formData = {
                id : id ,
                firstName : firstName,
                lastName : lastName,
                email : email,
                phone : phone,
                speciality : speciality,
                degree : degree,
                state : state,
                image : image,
                active : active
            }
        }

        this.http.put<{message : string}>(this.url + "api/doctor/edit/" + id , formData)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.doctorsUpdated.next(true);

            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    doctorUpdate(id ,data){
        this.http.put<{message : string}>(this.url + "api/doctor/edit/" + id , data)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.doctorsUpdated.next(res.message);

            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    deleteDoctor(id){
        this.http.delete(this.url + "api/doctor/" + id)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.doctorsUpdated.next(true)
            }
            ,error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    changePassword(id , data){
        this.http.put<{message : string}>(this.url + "api/doctor/change-password/" + id , data)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.doctorsUpdated.next(res.message);
            }
            ,error : (err : HttpErrorResponse) => {
                this.errorSub.next(err.error.message);
            }
        })
    }
}