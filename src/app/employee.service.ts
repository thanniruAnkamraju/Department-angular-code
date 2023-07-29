import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';



@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  getAddressList() {
  }

  
  private baseURL="http://localhost:8080/employee";

  constructor(private httpclient:HttpClient) { }

  getEmployeeList():Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`,employee);
    }
}

