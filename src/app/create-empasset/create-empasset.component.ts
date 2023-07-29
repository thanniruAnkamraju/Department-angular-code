import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eamasset } from '../eamasset';
import { EamassetService } from '../eamasset.service';
import { Empasset } from '../empasset';
import { EmpassetService } from '../empasset.service';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-empasset',
  templateUrl: './create-empasset.component.html',
  styleUrls: ['./create-empasset.component.css']
})
export class CreateEmpassetComponent implements OnInit {

  empasset:Empasset=new Empasset();
 employee:Employee[];
 eamasset:Eamasset[];
 issueItems:String[]=['Issue','Return'];
 
  dropdownSetting: { singleSelection: boolean; idField: string; textField: string; SelectAllText: string; unSelectAllText: string;onSelectAll:(items:any)=>void; OnUnSelectAll: (items:any)=>void; itemsShowLimit: number; allowSearchFilter: boolean; };
  selectedItems:String[]=[];

 

  constructor(private router :Router,private empassetService:EmpassetService,private employeeService:EmployeeService,
    private eamassetService:EamassetService) { 
this.dropdownSetting ={
  singleSelection:false,
  idField:'item',
  textField:'item',
  SelectAllText:'Select All',
  unSelectAllText:'unSelect All',
  onSelectAll:this.onSelectAll,
  OnUnSelectAll:this.onUnSelectAll,

  itemsShowLimit:3,
  allowSearchFilter:true


}
}
  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    });
    this.eamassetService.getEamassetList().subscribe(data => {
      this.eamasset = data;
      console.log(this.eamasset);
  });
}
  saveEmpasset(){
    this.selectedItems=this.empasset.items;
    console.log(this.selectedItems);
    this.issueItems=[];
    this.selectedItems.forEach(data => {
      this.issueItems.push(Object.values(data).toString());
  });
    this.empasset.items=this.issueItems;
    alert(JSON.stringify(this.empasset.items));
    this.empassetService.createEmpasset(this.empasset).subscribe(data => {
      console.log(data);
      this.goToEmpassetList();
    });
  }
  
  goToEmpassetList(){
    this.router.navigate(['/empasset']);
  }
  onSubmit(){
    console.log(this.empasset);
    this.saveEmpasset();
  }
 onSelectAll(items:any){
  console.log(items);
 } 
 onUnSelectAll (items:any){
  console.log(items);
 }
 onItemSelect(items:any){
  console.log(items);
 }
}

