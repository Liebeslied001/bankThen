import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesUtils'
})
export class PipesUtilsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
