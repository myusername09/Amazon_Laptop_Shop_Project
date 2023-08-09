import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';


import { Neworder } from './neworder';

@Injectable({
  providedIn: 'root'
})
export class NeworderService {

  

  baseUrl ="http://localhost:8090/neworder";
  
  constructor(private httpClient:HttpClient){}
  NewOrder(neworder:Neworder):Observable<object>
  {
      console.log(neworder);
      return this.httpClient.post(`${this.baseUrl}`,neworder);
  }
}
