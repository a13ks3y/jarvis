import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const strValue = value.toString();
    return strValue[0].toUpperCase() + strValue.substr(1);
  }

}
