import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(laptops: string[], searchInput: string): any[]{
    if(!searchInput) {
        return  [];
    }

   searchInput = searchInput.toLowerCase();
   return laptops.filter(
       x =>x.toLowerCase().includes(searchInput)
   )
 }
}
