import { Injectable } from '@angular/core';
import { Footer } from './footer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FooterService {

  

  baseUrl = "http://localhost:8090/footer";
  constructor(private httpclient : HttpClient) { }



  SendFeed(footer:Footer):Observable<object>
  {
      console.log(footer);
      return this.httpclient.post(`${this.baseUrl}`,footer);
  }
}
