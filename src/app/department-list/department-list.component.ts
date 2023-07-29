import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
 
 department!: Department[];

  constructor(private departmentservice:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartment();
  }


  private getDepartment(){
    this.departmentservice.getDepartmentList().subscribe(data => {
      this.department = data;
      console.log(this.department);
    });
  }}
