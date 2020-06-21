import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { SlicePipe } from "@angular/common";

@Pipe({ name: "dots" })
export class ThreeDotsPipe implements PipeTransform {
  constructor(private slice: SlicePipe) {}

  transform(value: any, start: number, end?: number): string {
    return (
      this.slice.transform(value, start, end) +
      (value.length > end ? "..." : "")
    );
  }
}

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  getShortName(pizzaName: string, length = 10) {
    if (pizzaName) {
      return (
        pizzaName.substr(0, length) + (pizzaName.length > length ? "..." : "")
      );
    }
    return "";
  }

  ngOnInit() {
    this.getPizza();
    this.pizzaSvc.onChange.subscribe(() => this.getPizza());
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      console.log(response);
      this.pizzas = response.value;
    });
  }

  removePizza(pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(() => this.ngOnInit());
  }

  modifyPizza(pizza) {
    this.pizzaSvc.modifyPizza(pizza).subscribe(() => this.ngOnInit());
  }
}
