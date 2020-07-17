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
  pizza: Pizza;

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
    this.pizzaSvc.pizzaChange.subscribe(() => {
      this.getPizza();
    });
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe((sub) => {
      this.pizzas = sub.value;
    });
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "Pizzusheen",
        description: "To jest kot pizzy",
        photoUrl:
          "https://www.pngkey.com/png/detail/5-50650_clipart-pizza-png-clipart-pusheen-eating-pizza.png",
      })
      .subscribe(() => this.ngOnInit());
  }

  modifyPizza() {
    this.pizzaSvc.modPizza({
      name: this.pizza.name,
      description: this.pizza.description,
      photoUrl: this.pizza.photoUrl,
    });
  }
}
