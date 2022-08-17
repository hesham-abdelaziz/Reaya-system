import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn : 'root'})
export class AdminGuard implements CanActivate{
     user = JSON.parse(localStorage.getItem('user'))
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.user.role == 'admin'){
            return true;
        }
        else {
            return false;
        }
    }
    
    
}