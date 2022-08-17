import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBone, faCalendar, faGear, faLocationCrosshairs, faLocationPinLock, faStar, faSyringe, faUser, faUserDoctor, faUserGear, faUserGroup, faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sideMenu') sideMenu : ElementRef;
  dashboard = faUserGear;
  appointments = faCalendar;
  speciality = faSyringe;
  doctors  = faUserDoctor;
  patients = faUserInjured;
  reviews = faStar;
  country = faLocationCrosshairs;
  constructor(private toggleService : ToggleService) { }

  ngOnInit(): void {
  }

  toggle(){
    this.sideMenu.nativeElement.classList.toggle('opened');
    if(this.sideMenu.nativeElement.classList.contains('opened')){
      this.toggleService.isToggled.next(true);
    }
    else {
      this.toggleService.isToggled.next(false);
    }
  }
}
