import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CountryService } from './country.service';

@Component({
  selector: 'app-states',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CountryComponent implements OnInit , OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  totalCountries = 0;
  countryPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [ 2 , 4 , 6];
  form : FormGroup;
  isEditing : boolean = false;
  isLoading : boolean;
  isDeleting : boolean;
  subscribtion : Subscription;
  countryId;
  displayedColumns: string[] = ['name', 'actions'];
  dataSource: MatTableDataSource<any>;
  constructor(    config: NgbModalConfig,
    private modalService: NgbModal ,
    private countryService : CountryService) { 
      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.isLoading = true;
    this.form = new FormGroup({
      name : new FormControl(null , Validators.required)
    });

    this.getCountries();
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  ngOnDestroy(): void {
      this.subscribtion.unsubscribe();
  }

  onAdd(content){
    this.isDeleting = false;
    this.isEditing = false;
    this.modalService.open(content);
  }

  onEdit(content , country){
    this.isDeleting = false;
    this.isEditing = true;
    this.countryId = country._id;
    console.log(country);
    this.modalService.open(content);
    this.form.setValue({
      name : country.name
    });
  }

  onDelete(countryId , content){
    this.countryId = countryId;
    this.isDeleting = true;
    this.modalService.open(content)
  }

  onCreate(data){

    if(!this.isDeleting){
      if(this.form.invalid){
        return;
      }
      if(!this.isEditing){
        this.countryService.addCountry(data);
        this.countryService.countriesUpdated
        .subscribe(value => {
          this.getCountries();
          this.form.reset();
        })

      }
      else {
        this.countryService.editCountry(this.countryId ,data);
        this.countryService.countriesUpdated
        .subscribe(value => {
          this.getCountries();
          this.form.reset();
        })
      }
    }

    else {
      this.countryService.deleteCountry(this.countryId);
      this.countryService.countriesUpdated
      .subscribe(value => {
        this.getCountries();
      })
    }
  }

  clearForm(){
    this.form.reset();
  }

  onPageChanged(pageData : PageEvent){
    this.currentPage = pageData.pageIndex + 1;
    this.countryPerPage = pageData.pageSize;
    this.countryService.getCountries(this.countryPerPage , this.currentPage);

  }

  getCountries(){
    this.countryService.getCountries(this.countryPerPage , this.currentPage);
   this.subscribtion =  this.countryService.getCountriesArray()
    .subscribe(countries => {
      this.modalService.dismissAll();
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(countries.countries);
          this.dataSource.paginator = this.paginator;
      }, 400);
    })


  }
}
