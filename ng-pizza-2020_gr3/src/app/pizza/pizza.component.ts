import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Pipe({ name: "dots" })
export class ThreeDotsPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    return value.length > 10 ? value.substring(0, 10) + "..." : value;
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

  ngOnInit() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        console.log(response);
        this.pizzas = response.value;
      },
      (error) => {
        console.log("jest blad", error);
      }
    );
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "Margehrita",
        description: " Salami, salad XD",
      })
      .subscribe(() => this.ngOnInit());
  }

  removePizza(id) {
    console.log(id);
    this.pizzaSvc.removePizza(id).subscribe(() => this.ngOnInit());
  }
}
