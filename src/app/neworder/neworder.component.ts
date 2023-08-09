import { Component, OnInit } from '@angular/core';
import { NeworderService } from '../neworder.service';
import { Neworder } from '../neworder';
import { VieworderService } from '../vieworder.service';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit{

neworder:Neworder=new Neworder();
constructor(private neworderService:NeworderService, private vieworderService:VieworderService){

}
ngOnInit(): void {
    
}
  
 NewOrder(){
  console.log(this.neworder);
  this.neworderService.NewOrder(this.neworder).subscribe(data=>{
    alert("Successfully product has been ordered")
  },
  error=>alert("Sorry product is not ordered!!"));



}



}
