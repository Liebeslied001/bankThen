import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'months',
})
export class MonthPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    const monthValue = value.split('/')[1];
    const year = value.split('/')[2];
    let format = '';
    let month = '';
    console.log(monthValue);
    if (monthValue == '03') {
      month = 'March';
    }
    format = `${month}, ${year}`;
    return format;
  }
}
