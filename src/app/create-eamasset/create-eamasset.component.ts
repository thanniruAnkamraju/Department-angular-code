import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eamasset } from '../eamasset';
import { EamassetService } from '../eamasset.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-create-eamasset',
  templateUrl: './create-eamasset.component.html',
  styleUrls: ['./create-eamasset.component.css']
})
export class CreateEamassetComponent implements OnInit {

  eamasset:Eamasset=new Eamasset();

  

  constructor(private router :Router,private eamassetService:EamassetService) { }

  ngOnInit(): void {
  }
  saveEamasset(){
    this.eamassetService.createEamasset(this.eamasset).subscribe(data => {
      console.log(data);
      this.goToEamassetList();
    });
  }
  
  goToEamassetList(){
    this.router.navigate(['/eamasset']);
  }
  onSubmit(){
    console.log(this.eamasset);
    this.saveEamasset();
  }
  
  
}

