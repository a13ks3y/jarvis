import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripDash'
})
export class StripDashPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const strValue = value.toString();
    return strValue.replace(/[-]/g, ' ');
  }

}
