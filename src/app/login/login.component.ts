import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  constructor(private registerService:LoginService){}

  ngOnInit():void{

  }
/*
  userRegister(){
    console.log(this.user);
    this.registerService.userRegister(this.user).subscribe(data=>{
      alert("Successfully User has been registered")
    },
    error=>alert("Sorry User not registered successfully!!"));
*/

Regist(){
  console.log(this.user);
  this.registerService.Regist(this.user).subscribe(data=>{
    alert("Successfully User has been registered")
  },
  error=>alert("Sorry User not registered successfully!!"));


  }

  }


