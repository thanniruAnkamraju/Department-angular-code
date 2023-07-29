import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { CreatedepartmentComponent } from './createdepartment/createdepartment.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EamassetListComponent } from './eamasset-list/eamasset-list.component';
import { CreateEamassetComponent } from './create-eamasset/create-eamasset.component';
import { EmpassetListComponent } from './empasset-list/empasset-list.component';
import { CreateEmpassetComponent } from './create-empasset/create-empasset.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    CreatedepartmentComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EamassetListComponent,
    CreateEamassetComponent,
    EmpassetListComponent,
    CreateEmpassetComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
