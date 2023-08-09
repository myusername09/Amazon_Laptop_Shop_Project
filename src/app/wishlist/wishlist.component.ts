import { Component, OnInit } from '@angular/core';
import { WishlistsService } from '../wishlists.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  items=this.wishlistsService.getItems();

  constructor(private wishlistsService : WishlistsService){

 }
 ngOnInit(): void {
     
 }

}
