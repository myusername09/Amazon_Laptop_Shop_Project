import { Component } from '@angular/core';

import {  OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput: string = '';
  
    public LaptopBrands = [
      'samsung','redmi','lava','nokia','maxpro',
      'asus','apple','macbook','hp','lenovo','dell'
   ]

constructor( private searchService:SearchService){
 
    

}
ngOnInit(): void {
    
}
   search() {
    
      this.searchInput;
    //this.currentPage = 1; // Reset to the first page after search
  }
}


