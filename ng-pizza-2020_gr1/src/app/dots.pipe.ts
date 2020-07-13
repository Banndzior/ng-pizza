import { Pipe, PipeTransform } from '@angular/core';
import {SlicePipe, TitleCasePipe} from '@angular/common';

@Pipe({
  name: 'dots'
})
export class DotsPipe implements PipeTransform {
  constructor(
    private slicePipe: SlicePipe,
    private titlePipe: TitleCasePipe
  ) {}

  transform(value: string, length: number): string {
    let output = this.slicePipe.transform(value, 0, length);
    output = this.titlePipe.transform(output);
    return value.length > length ? output += '...' : output;
  }

}
