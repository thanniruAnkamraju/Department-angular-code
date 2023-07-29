import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import{Router} from '@angular/router';
import { Address } from '../address';
@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent implements OnInit {

  department:Department=new Department();
  //router: any;

  constructor(private router :Router,private departmentService:DepartmentService) { }

  ngOnInit(): void {
  }
  saveDepartment(){
    this.departmentService.createDepartment(this.department).subscribe(data => {
      console.log(data);
      this.goToDepartmentList();
    });
  }
  
  goToDepartmentList(){
    this.router.navigate(['/department']);
  }
  onSubmit(){
    console.log(this.department);
    this.saveDepartment();
  }
}

