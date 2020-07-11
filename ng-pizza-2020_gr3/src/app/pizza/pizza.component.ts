import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import {Router} from "@angular/router";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService, private router: Router) {
    this.router.events.subscribe();
  }

  ngOnInit() {
    this.getPizza();
    this.pizzaSvc.pizzaEmitter.subscribe((msg) => {
     this.getPizza();
      });
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        this.pizzas = response.value;
      },
      (error) => {
        console.log(error);
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
