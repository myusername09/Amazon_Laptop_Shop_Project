import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //This URL connects spring because spring backend is running in port number 8080


  baseUrl = "http://localhost:8090/user";
  constructor(private httpclient : HttpClient) { }



  Regist(user:User):Observable<object>
  {
      console.log(user);
      return this.httpclient.post(`${this.baseUrl}`,user);
  }
}
