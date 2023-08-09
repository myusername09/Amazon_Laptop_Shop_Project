import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { WishlistsService } from '../wishlists.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  /*
  
product:Product = {
  name : "Apple Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 1000000,
  image : "assets/apple.jpg",
}
 product1:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/dell.jpg",
}
product2:Product = {
  name : "HP Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 56000,
  image : "assets/laptop.jpg",
}


product3:Product = {
  name : "Lenovo Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 66979,
  image : "assets/lenovo.jpg",
}

product4:Product = {
  name : "Macbook Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 100979,
  image : "assets/macbook.jpg",
}

product5:Product = {
  name : "Asus Vivobook Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 40979,
  image : "assets/asus.jpg",
}

product6:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product6.jpg",
}

product7:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product7.jpg",
}

product8:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product8.jpg",
}

product9:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product9.jpg",
}

product10:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product10.jpg",
}

product11:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product11.jpg",
}

product12:Product = {
  name : "Dell Laptop",
  description : "It is an high quality laptop with amazing features",
  price : 34000,
  image : "assets/product12.jpg",
}

ngOnInit(): void {
    
}
constructor(private cartService: CartService, private wishlistsService:WishlistsService )
  
{

}
*/


productList:any[] = [
  {
    "name":"Apple laptop",
    "description":"Its high quality laptop. SSD-512GB, 8GB RAM, 12th Generation",
    "price":86576,
    "image":"assets/apple.jpg"
  },

  {
    "name":"HP Laptop",
    "description":"SSD-512GB, 8GB RAM, 12th Generation",
    "price":56576,
    "image":"assets/laptop.jpg"
  },
  {
    "name":"Lenovo laptop",
    "description":"SSD-120GB, 4GB RAM, 8th Generation",
    "price":36576,
    "image":"assets/lenovo.jpg"
  },
  {
    "name":"Macbook laptop",
    "description":"Its high quality laptop, SSD-512GB, 8GB RAM, 12th Generation",
    "price":106576,
    "image":"assets/macbook.jpg"
  },
  {
    "name":"Asus laptop",
    "description":"SSD-512GB, 8GB RAM, 8th Generation",
    "price":36576,
    "image":"assets/asus.jpg"
  },
  {
    "name":"Apple laptop",
    "description":"Its high quality laptop, SSD-512GB, 8GB RAM, 11th Generation",
    "price":106576,
    "image":"assets/product6.jpg"
  },
  {
    "name":"HP laptop",
    "description":"SSD-120GB, 8GB RAM, 11th Generation",
    "price":56576,
    "image":"assets/product7.jpg"
  },
  {
    "name":"Lenovo laptop",
    "description":"SSD-512GB, 4GB RAM, 6th Generation",
    "price":42576,
    "image":"assets/product8.jpg"
  },
  {
    "name":"Macbook laptop",
    "description":"Its high quality laptop",
    "price":126576,
    "image":"assets/product9.jpg"
  },
  {
    "name":"Asus laptop",
    "description":"SSD-512GB, 8GB RAM, 11th Generation",
    "price":46576,
    "image":"assets/product10.jpg"
  },
  {
    "name":"Dell laptop",
    "description":"SSD-120GB, 4GB RAM, 11th Generation",
    "price": 55576,
    "image":"assets/product11.jpg"
  },
  {
    "name":"Lenovo laptop",
    "description":"SSD-120GB, 8GB RAM, 8th Generation",
    "price":46576,
    "image":"assets/product12.jpg"
  }
];
products:any[] = [];
productsPerPage:number=4;
public selectedPage = 1;

ngOnInit() {
 let pageIndex=(this.selectedPage-1)*this.productsPerPage;
 this.products=this.productList.slice(pageIndex, this.productsPerPage);
}
constructor(private cartService: CartService, private wishlistsService:WishlistsService, )
  
{

}

changePageSize(event:Event){

const newSize=(event.target as HTMLInputElement).value
this.productsPerPage=Number(newSize);
}

get pageNumbers():number[]{
  return Array(Math.ceil(this.productList.length /this.productsPerPage))
  .fill(0).map((x, i)=>i+1);
}

changePage(page : any){
  this.selectedPage=page;
  this.slicedProducts();

}
slicedProducts(){
let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

let endIndex = (this.selectedPage - 1) * this.productsPerPage + this.productsPerPage;
this.products = [];
this.products = this.productList.slice(pageIndex, endIndex);
}

addToCart(product:Product){
  this.cartService.addToCart(product);
  window.alert('Your product is added to cart');
  
}

addToWishlist(product:Product){
  this.wishlistsService.addToWishlist(product);
  window.alert('Your product is added to wishlist');
}



}