import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})



export class CountryService  {
    url = environment.baseUrl;
    countriesArray = new Subject<any>();
    citiesArray = new BehaviorSubject<any>([]);
    governorate = new Subject<any>();
    countriesUpdated = new Subject<any>();
    constructor(private http : HttpClient){}


    getCountries(countryPerPage : number , currentPage : number){
        const queryParams = `?pagesize${countryPerPage}&page${currentPage}`
        this.http.get(this.url + "api/country" + queryParams)
        .subscribe({
            next : (res) => {
                this.countriesArray.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    getCountriesArray(){
        return this.countriesArray.asObservable()
        
    }

    getAll() {
      return  this.http.get(this.url + "api/country")

    }

    getGovernorate(id){
        this.http.get(this.url + "api/country/" + id)
        .subscribe({
            next : (res) => {
                this.governorate.next(res);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }

    getCities(id){
       return this.http.get(this.url + "api/country/cities/" + id)
      
    }

    addCountry(name : string){
        console.log(name);
        this.http.post(this.url + "api/country/add" , name)
        .subscribe({
            next : (res) => {
                this.countriesUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    editCountry(id : string , name : string) {
        this.http.put(this.url + "api/country/" + id , name)
        .subscribe({
            next : (res) => {
                console.log(res);
                this.countriesUpdated.next(true);

            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }


    deleteCountry(id : string) {
        this.http.delete(this.url + "api/country/" + id)
        .subscribe({
            next : (res) => {
                this.countriesUpdated.next(true);
            },
            error : (err : HttpErrorResponse) => {
                console.log(err);
            }
        })
    }
}