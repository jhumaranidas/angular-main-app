import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value !== 'string') {
       return value;
     }
     return value.charAt(0).toUpperCase() + value.slice(1);
   }

}
