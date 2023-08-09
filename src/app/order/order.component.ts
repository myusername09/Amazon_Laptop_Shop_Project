import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements  OnInit{


  order:Order=new Order();
constructor(private orderNowService:OrderService){}
 
ngOnInit(): void {
     
 }
 OrderProduct(){
  console.log(this.order);
  this.orderNowService.OrderProduct(this.order).subscribe(data=>{
    alert("Successfully product has been ordered")
  },
  error=>alert("Sorry product is not ordered!!"));



}



 


}
