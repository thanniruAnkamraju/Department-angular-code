import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseURL="http://localhost:8080/departments";
  constructor(private  httpclient:HttpClient) { }

  getDepartmentList():Observable<Department[]>{
  return this.httpclient.get<Department[]>(`${this.baseURL}`);
}
createDepartment(department:Department):Observable<Object>{
return this.httpclient.post(`${this.baseURL}`,department);
}
}