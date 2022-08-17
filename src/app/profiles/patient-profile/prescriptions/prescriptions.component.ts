import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  displayedColumns: string[] = ['prescription', 'quantity' ,'duration', 'date' , 'actions'];
  dataSource: MatTableDataSource<any>;
  isLoading : boolean;
  constructor() { }

  ngOnInit(): void {
  }

 
  chooseDoctor(doctor){

  }

  

}
