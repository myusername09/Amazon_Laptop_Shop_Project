import { Component, OnInit } from '@angular/core';
import { VieworderService } from '../vieworder.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  /*
  items=this.vieworderService.getItems();
  
  product=this.vieworderService.getItems();
  constructor(private vieworderService:VieworderService){

  }
  */
  ngOnInit(): void {
      
  }
}
