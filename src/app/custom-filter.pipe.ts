import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any {
    if (!searchTerm) {
      return data;
    }
    return filter(data, { name: searchTerm })[0];
  }
}
