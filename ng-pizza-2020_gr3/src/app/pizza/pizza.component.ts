import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getPizza();
      }
    });
  }

  ngOnInit() {
    this.pizzaSvc.onPizzaChange.subscribe(() => {
      this.getPizza();
    });
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        this.pizzas = response.value;
      },
      (error) => {
        console.log("jest blad", error);
      }
    );
  }
}
