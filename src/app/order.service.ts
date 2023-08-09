import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';

import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl ="http://localhost:8090/order";
  
  constructor(private httpClient:HttpClient){}
  OrderProduct(order:Order):Observable<object>
  {
      console.log(order);
      return this.httpClient.post(`${this.baseUrl}`,order);
  }
}

  
  
  
