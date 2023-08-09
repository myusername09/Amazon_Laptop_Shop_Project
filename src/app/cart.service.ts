import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items : Product[]=[];
  constructor() { }

//create methods
//This method is used to add products to the cart.
addToCart(product:Product){
  this.items.push(product);

}

getItems(){
  return this.items;
}

ClearCart(){
  //It makes products as empty
  this.items=[];
  return this.items;
}

}
