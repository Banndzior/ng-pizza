import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, NavigationEnd } from "@angular/router";

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

  constructor(private pizzaSvc: PizzaService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getPizzas();
      }
    });
  }

  ngOnInit() {
    this.getPizzas();

    this.pizzaSvc.onPizzaChange.subscribe(() => this.getPizzas());
  }

  getPizzas() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        console.log(response);
        this.pizzas = response.value;
      },
      (error) => {
        console.log("Get pizza error", error);
      }
    );
  }
}
