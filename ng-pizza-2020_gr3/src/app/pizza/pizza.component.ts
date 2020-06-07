import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.getPizza();
  }

  getPizza() {
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
      .subscribe(() => this.getPizza());
  }
}
