import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';

@Pipe({
  name: 'getHolesByKey'
})
export class GetHolesByKey implements PipeTransform {
  transform(data: Hotel[], searchTerm: string, key: string = 'type'): Hotel[] {
    if (!searchTerm) {
      return data;
    }
    return filter(data, { [key]: searchTerm });
  }
}
