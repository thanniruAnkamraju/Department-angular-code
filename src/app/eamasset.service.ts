import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Eamasset } from './eamasset';

@Injectable({
  providedIn: 'root'
})
export class EamassetService {

  private baseURL="http://localhost:8080/eamasset";
  constructor(private  httpclient:HttpClient) { }

  getEamassetList():Observable<Eamasset[]>{
  return this.httpclient.get<Eamasset[]>(`${this.baseURL}`);
}
createEamasset(eamasset:Eamasset):Observable<Object>{
return this.httpclient.post(`${this.baseURL}`,eamasset);
}
}
