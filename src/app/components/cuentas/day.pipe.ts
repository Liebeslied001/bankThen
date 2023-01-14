import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days',
})
export class DayPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    const dayValue = value.split('/')[0];
    console.log(dayValue);
    if (dayValue == '07') {
      return 'Monday';
    } else if (dayValue == '06') {
      return 'Sunday';
    } else if (dayValue == '05') {
      return 'Saturday';
    } else {
      return '';
    }
  }
}
