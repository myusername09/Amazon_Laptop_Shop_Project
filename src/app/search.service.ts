import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  // search.service.ts



  searchProducts(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm.trim()) {
      return products; // If the search term is empty, return the original array of products
    }

    searchTerm = searchTerm.toLowerCase();

    // Filter the products based on the search term
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }
}

