import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...filterBy: string[]): any[] {
    let returnableValue = value;
    if (filterBy[0] != 'all') {
      returnableValue = value.filter(item => item.category == filterBy[0])
    }
    if (filterBy[1] != 'all') {
      returnableValue = value.filter((item) => item.title.toUpperCase().includes(filterBy[1].toUpperCase()));
    }
    return returnableValue;
  }

}
