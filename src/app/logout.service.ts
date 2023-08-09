import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logout } from './logout';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  
  baseUrl = "http://localhost:8090/loggedout";
  constructor(private httpclient : HttpClient) { }


  userLogout(loggedout:Logout):Observable<object>
  {
      console.log(loggedout);
      return this.httpclient.post(`${this.baseUrl}`,loggedout);
  }
}
