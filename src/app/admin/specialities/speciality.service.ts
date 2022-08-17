import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})


export class SpecialityService {
    url = environment.baseUrl;
    specialityArray = new Subject<any>();
    specialityUpdated = new Subject<any>();
    singleSpeciality = new Subject<any>();
    constructor(private http : HttpClient){}

    getSpecialites(specPerPage : number , currentPage : number){
        const queryParams = `?pagesize=${specPerPage}&page=${currentPage}`
        this.http.get<{data : any , maxNum : number}>(this.url + "api/speciality" + queryParams)
        .pipe(map((res : any) => {
            return {
                specialites : res.specialites.map(speciality => {
                    return {
                        name : speciality.name,
                        image : speciality.image,
                        id : speciality._id
                    }
                }),
                maxNum : res.maxNum 
            }
        }))
        .subscribe({
            next : (res) => {
                this.specialityArray.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    getAllSpecialites(){
        return this.specialityArray.asObservable();
    }

    getAll(){
        this.http.get(this.url + "api/speciality/all")
        .subscribe({
            next : (res) => {
                this.specialityArray.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    createSpeciality(name : string , image : File){
        const formData : FormData = new FormData();

        formData.append('name' , name);
        formData.append('image' , image , name);

        this.http.post(this.url + "api/speciality/create" , formData)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.specialityUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    getSingleSpeciality(id){
        this.http.get(this.url + "api/speciality/" + id)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.singleSpeciality.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    editSpeciality(id  : string, name : string , image : File | string){
        console.log(image);
        let formData : FormData | any = new FormData();
        if( typeof image  === "object"){
            console.log('true');
            formData.append('id' , id);
            formData.append('name' , name);
             formData.append('image' , image , name);
        }
        else {
            formData = {
                id : id ,
                name : name ,
                image : image
            }
        }
     
    
     
   
             this.http.put(this.url + "api/speciality/" + id , formData)
             .subscribe({
                next : (res) => {
                    console.log(res);
                    this.specialityUpdated.next(true);
                },
                error : (err : HttpErrorResponse) => {
                    console.log(err);
                }
            })
    }

    deleteSpeciality(id) {
    this.http.delete(this.url + "api/speciality/" + id)
    .subscribe({
        next : (res) => {
            console.log(res);
            this.specialityUpdated.next(true);

        },
        error : (err : HttpErrorResponse) => {
            console.log(err);
        }
    })
    }
}