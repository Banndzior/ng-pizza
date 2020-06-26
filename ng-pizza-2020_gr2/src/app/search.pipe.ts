import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  public transform(pizzas: any, searchText: any) {
    if (!searchText) return pizzas;
    return pizzas.filter((pizza) =>
      pizza.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
