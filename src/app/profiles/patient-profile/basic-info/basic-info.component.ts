import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  form : FormGroup;
  bloodType = [
    {
      value : "O-"
    },
    {
      value : "O+"
    },
    {
      value : "A-"
    },
    {
      value : "A+"
    },
    {
      value : "B-"
    },
    {
      value : "B+"
    },
    {
      value : "AB-"
    },
    {
      value : "AB+"
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl(''),
      bloodType : new FormControl(''),
      gender : new FormControl(''),
    })
  }

}
