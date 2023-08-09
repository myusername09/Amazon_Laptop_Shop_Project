import { Component, OnInit } from '@angular/core';
import { Logout } from '../logout';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  loggedout:Logout=new Logout();
  constructor(private logoutService:LogoutService){}
  ngOnInit(): void {
      
  }

  userLogout(){
    console.log(this.loggedout);
    this.logoutService.userLogout(this.loggedout).subscribe(data=>{
      alert("Successfully User has been logout")
    },
    error=>alert("Sorry User has not been loggedout yet!!"));



  }

}
