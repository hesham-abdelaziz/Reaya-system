import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {  map, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})


export class AuthService  {
    url = environment.baseUrl;

    emailExist = new Subject<any>();
    status = new Subject<any>();
    isAuthenticated : boolean;
    authStatus = new Subject<boolean>();
    constructor(private http : HttpClient , private router : Router){}


    createAccount(data){
        this.http.post<{token : string , user : string}>(this.url + "api/user/create" , data)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.saveUser(res.token , res.user);
                this.router.navigate(['/patient'])
            },
            error : (error : HttpErrorResponse) => {
                this.emailExist.next(true);
                console.log(error);
            }
        })
    }


    logIn(data){
        this.http.post<{token : string , user : any}>(this.url + "api/user/login" , data)
        .subscribe({
            next : (res : any) => {
                console.log(res);
                
                if(res.user.active && !res.user.role){
                    this.status.next('active');
                    this.saveUser(res.token , res.user);
                    this.router.navigate(['/']);
                    this.isAuthenticated = true;
                    this.authStatus.next(true);
                }
                else {
                    if(res.user.role == 'admin'){
                        this.router.navigate(['/admin']);
                        this.saveUser(res.token , res.user);
                        this.isAuthenticated = true;
                        this.authStatus.next(true);

                    }
                    else {
                        console.log('not admin');
                        this.router.navigate(['/']);
                        this.saveUser(res.token , res.user);

                    }
                    }
               
                
            },
            error : (error : HttpErrorResponse) => {
                console.log(error);
            }
        })
    }


    saveUser(token? , user?){
        localStorage.setItem('token' , token);
        localStorage.setItem('user' , JSON.stringify(user));
    }


    getAuthenicated(){
        return this.isAuthenticated;
    }

    get userData(){
        let user = JSON.parse(localStorage.getItem('user'));
        let token = localStorage.getItem('token');

        return {
            name : user,
            token : token
        }
    }


    getUser(id){
        this.http.get(this.url + "api/user/" + id)
        .pipe(map((res : any) => {
            return {
                id : res._id,
                firstName : res.firstName,
                lastName : res.lastName,
                name : res.firstName + " " + res.lastName,
                email : res.email,
                role : res.role,
                image : res.image,
                accountStatus : res.accountStatus,
                accountType : res.accountType,
                speciality : res.speciality,
                active : res.active
            }
        }))
        .subscribe({
            next : (res) => {
                console.log(res);
                localStorage.setItem('user' , JSON.stringify(res));

            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }
    logOut(){
        localStorage.clear();
        location.href = "/"
    }
} 