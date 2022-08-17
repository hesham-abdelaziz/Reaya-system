import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideAnimate } from './animations';
import { ToggleService } from './header/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    slideAnimate
  ]
})
export class AppComponent {
  title = 'reaya';
  isToggled : boolean;
  user = JSON.parse(localStorage.getItem('user'));
  constructor(public router : Router , private toggleService : ToggleService){
    toggleService.toggleStatus()
    .subscribe(status => {
      this.isToggled = status;
      console.log(status);
    })
    
  }
  getState(outlet)  {
		return outlet.activatedRouteData.state;
	}
}
