/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
}
*/
// image-pagination.component.ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  productList:any[] = [
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    },
    {
      "name":"apple laptop",
      "description":"Its high quality laptop",
      "price":576576,
      "image":"assets/apple.jpg"
    }
  ];
  products:any[] = [];
  productsPerPage:number=4;
  public selectedPage = 1;
  constructor(){}
  ngOnInit() {
   let pageIndex=(this.selectedPage-1)*this.productsPerPage;
   this.products=this.productList.slice(pageIndex, this.productsPerPage);
  }
  changePageSize(event:Event){

  }

  get pageNumbers():number[]{
    return Array(Math.ceil(this.productList.length /this.productsPerPage))
    .fill(0).map((x, i)=>i+1);
  }

}