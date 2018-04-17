import { Pipe, PipeTransform } from '@angular/core';
import { findIndex } from 'lodash';

@Pipe({
  name: 'customSplice'
})
export class CustomSplicePipe implements PipeTransform {
  transform(data: any, searchTerm: any): any {
    if (!searchTerm) {
      return data;
    }

    const index = findIndex(data, { name: searchTerm });
    const newData = [...data];
    newData.splice(index, 1);
    return newData;
  }
}
