import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
log : Log=new Log()
  constructor(private logService:LogService){

  }

  ngOnInit(): void {
    
  }
  /*

  UserLogin(){
    console.log(this.log);
    this.logService.UserLogin(this.log).subscribe(data=>{
      alert("Successfully User has been logged in")
    },
    error=>alert("Sorry User has not been registered yet!!"));

  */
 /*
  
    Login(){
      console.log(this.log);
      this.logService.Login(this.log).subscribe(data=>{
        alert("Successfully User has been logged in")
      },
      error=>alert("Sorry User has not been registered yet!!"));
  

}
*/
}
