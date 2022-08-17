import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn : 'root'})


export class ToggleService {
    isToggled = new BehaviorSubject<boolean>(false);


    toggleStatus(){
        return this.isToggled.asObservable();
    }
}