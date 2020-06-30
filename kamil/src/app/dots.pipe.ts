import { Pipe, PipeTransform } from '@angular/core';
import {SlicePipe} from '@angular/common';

@Pipe({
  name: 'dots'
})
export class DotsPipe implements PipeTransform {
  constructor(private slicePipe: SlicePipe) {}

  transform(value: string, length: number): string {
    let output = this.slicePipe.transform(value, 0, length);
    return value.length > length ? output += '...' : output;
  }

}
