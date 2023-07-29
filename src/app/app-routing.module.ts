import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEamassetComponent } from './create-eamasset/create-eamasset.component';
import { CreateEmpassetComponent } from './create-empasset/create-empasset.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreatedepartmentComponent } from './createdepartment/createdepartment.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EamassetListComponent } from './eamasset-list/eamasset-list.component';
import { EmpassetListComponent } from './empasset-list/empasset-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
{path:'department',component: DepartmentListComponent },
{path:'create-department',component:CreatedepartmentComponent},
{path:'',redirectTo:'department',pathMatch:'full'},
{path:'employee',component:EmployeeListComponent},
{path:'create-employee',component:CreateEmployeeComponent},
{path:'eamasset',component:EamassetListComponent},
{path:'create-eamasset',component:CreateEamassetComponent},
{path:'empasset',component:EmpassetListComponent},
{path:'create-empasset',component:CreateEmpassetComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
