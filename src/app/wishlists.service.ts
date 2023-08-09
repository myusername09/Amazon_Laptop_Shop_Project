import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {

  items : Product []=[];
  constructor() { }

//create methods
//This method is used to add products to the cart.
addToWishlist(product:Product){
  this.items.push(product);

}
getItems(){
  return this.items;
}
  
}
