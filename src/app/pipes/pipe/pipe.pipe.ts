import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom',
  pure: true,
  // pure: false, the value channges with each change in array.The value is always drawn. true-one value in array
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}
