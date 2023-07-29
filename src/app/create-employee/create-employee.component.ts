import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Address } from '../address';
import { Qualification } from '../qualification';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  address:Address=new Address();
  qualification:Qualification=new Qualification();
  department:Department[];
 // router: any;
  


 constructor(private employeeservice:EmployeeService,private departmentService:DepartmentService,private router: Router) { 
  this.employee.address=this.address;
  this.employee.qualification=this.qualification;
}

 
 

  ngOnInit(): void {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.department = data;
      console.log(this.department);
    });
  }

 
  saveEmployee(){
    this.employeeservice.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    });
  }


goToEmployeeList(){
  this.router.navigate(['/employee']);
}
onSubmit(){
  console.log(this.employee);
  this.saveEmployee();

}
getDipName(){

  var dName=(this.employee.firstName?this.employee.firstName:'')+' '+(this.employee.middleName?this.employee.middleName:'')+' '+(this.employee.lastName?this.employee.lastName:'');
   this.employee.displayName=dName;

}
}





