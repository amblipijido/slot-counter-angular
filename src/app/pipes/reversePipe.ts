import { Pipe, PipeTransform } from '@angular/core';
import { Lap } from '../model/lap';

@Pipe({
  name: 'limitLapsAndReverse',
  pure: false
})
export class ReversePipe implements PipeTransform {
  arraySize = 5;

  transform(value: Lap[]): Lap[] {
    const arrayLenght = value.length;
    if (arrayLenght >= this.arraySize) {
      return value.slice(value.length - 5, value.length).reverse();
    } else {
      return value.reverse();
    }
  }
}
