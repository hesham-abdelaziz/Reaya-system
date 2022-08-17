import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faCalendar, faChevronLeft, faFileWaveform, faGear, faHospital, faLock, faStar, faTablets, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from './image.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit , AfterViewInit{
  @ViewChild('menu') menu : ElementRef;
  @ViewChild('overlay') overlay : ElementRef;
  dashboard = faUserGear;
  clinics = faHospital;
  appointments = faCalendar;
  reviews = faStar;
  settings = faGear;
  password = faLock;
  chevron = faChevronLeft;


  tablets = faTablets;
  records = faFileWaveform;
  @Input() user;
  constructor(private imageService : ImageService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     const links = document.querySelectorAll('li');

     links.forEach(link => {
      link.addEventListener('click' , () => {
        this.menu.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');

      })
     })
  }

  toggleMenu(){
    this.menu.nativeElement.classList.toggle('active');
    this.overlay.nativeElement.classList.toggle('active');
  }

  changeImage(event : Event){
      let image = (event.target as HTMLInputElement).files[0];

    this.imageService.changeImage(this.user.id , image);
  }
}
