import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewEncapsulation,  } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade , Parallax} from "swiper";
import { CountryService } from '../admin/country/country.service';
import { SpecialityService } from '../admin/specialities/speciality.service';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation , EffectFade , Parallax]);

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit , OnDestroy {
  url  = environment.baseUrl;
  countries : Array<any> = [];
  cities : any = [];
  specialities : Array<any> = [];
  countrySub : Subscription;
  specSub : Subscription;
  isLoading : boolean;
  loadingGov : boolean;
  constructor(private specService : SpecialityService ,
     private countryService : CountryService ,
     private http : HttpClient) { }

  ngOnInit(): void {
    this.loadingGov = true;
    this.specService.getAll();
   this.specSub = this.specService.specialityArray
    .subscribe(x => {
      this.specialities = x;
    })
    this.countryService.getAll()
    .subscribe({
      next : (res) => {
        this.loadingGov = false;
        this.countries = res[0].data;
      }
      ,error : (err : HttpErrorResponse) => {
        console.log(err);
      }
    })
  
   this.countrySub =  this.countryService.countriesArray
    .subscribe(x => {
      this.countries = x[0].data;
      console.log(this.countries);
    })
  }

  ngOnDestroy(): void {
      this.countrySub.unsubscribe();
      this.specSub.unsubscribe();
  }

  getcities(gov){
    this.isLoading = true;
    console.log(gov);
    this.countryService.getCities(gov)
    .subscribe({
      next: (res) => {
        this.isLoading = false;
        this.cities = res;
      },
      error : (err : HttpErrorResponse) => {
        console.log(err);
      }
    });

  }
}
