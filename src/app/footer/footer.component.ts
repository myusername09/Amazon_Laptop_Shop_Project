import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { Footer } from '../footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
footer : Footer=new Footer();

  constructor(private footerService:FooterService){}
  ngOnInit(): void {
      
  }

  SendFeed(){
    console.log(this.footer);
    this.footerService.SendFeed(this.footer).subscribe(data=>{
      alert("Thank you for your feedback")
    },
  
    
    error=>alert("!!"));
  }  
}
