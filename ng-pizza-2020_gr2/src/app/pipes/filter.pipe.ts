import { Pipe, PipeTransform } from "@angular/core";
import { Pizza } from "../pizza";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: Pizza[], query: string): Pizza[] {
    return value.filter((pizza) =>
      pizza.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
