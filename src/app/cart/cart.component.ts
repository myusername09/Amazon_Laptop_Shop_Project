import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  items=this.cartService.getItems();
  product=this.cartService.getItems();
  constructor(private cartService:CartService, private orderNowService:OrderService){

  }
ngOnInit(): void {
    
}

}
