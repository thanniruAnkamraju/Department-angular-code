import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empasset } from './empasset';

@Injectable({
  providedIn: 'root'
})
export class EmpassetService {

  private baseURL="http://localhost:8080/empasset";
  
  constructor(private  httpclient:HttpClient) { }

  getEmpassetList():Observable<Empasset[]>{
  return this.httpclient.get<Empasset[]>(`${this.baseURL}`);
}
createEmpasset(empasset:Empasset):Observable<Object>{
return this.httpclient.post(`${this.baseURL}`,empasset);
}
}
