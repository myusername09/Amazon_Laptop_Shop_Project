import { Injectable } from '@angular/core';
import { Log } from './log';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

/*
  baseUrl = "http://localhost:8090/log";
  constructor(private httpclient : HttpClient) { }



  Login(log:Log):Observable<object>
  {
      console.log(log);
      return this.httpclient.post(`${this.baseUrl}`,log);
  }
  */
}
