import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faArrowDown, faArrowRightFromBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('icon') icon : ElementRef;
  @ViewChild('userSettings') userSettings : ElementRef;
  down = faChevronDown;
  isAuthenticated : boolean;
  logout = faArrowRightFromBracket
  user = JSON.parse(localStorage.getItem('user'));
  constructor(public authService : AuthService) { 
  }

  ngOnInit(): void {

    if(this.user){
      this.isAuthenticated =true;

    }
    else {
      this.isAuthenticated = false;
    }
  
  }

  toggleSettings(){
    this.icon.nativeElement.classList.toggle('toggled');
    this.userSettings.nativeElement.classList.toggle('toggled');
  }

}
