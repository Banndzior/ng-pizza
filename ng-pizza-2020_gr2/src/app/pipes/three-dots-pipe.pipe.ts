import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dots",
})
export class ThreeDotsPipePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 10) {
      value = value.slice(0, 10) + "...";
    }
    return value;
  }
}
