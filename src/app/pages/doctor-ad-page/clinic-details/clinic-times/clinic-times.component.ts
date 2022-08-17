import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clinic-times',
  templateUrl: './clinic-times.component.html',
  styleUrls: ['./clinic-times.component.css']
})
export class ClinicTimesComponent implements OnInit {
  displayedColumns: string[] = ['day', 'from', 'to'];
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
