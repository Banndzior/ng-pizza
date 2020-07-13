import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-details",
  templateUrl: "./pizza-details.component.html",
  styleUrls: ["./pizza-details.component.css"],
})
export class PizzaDetailsComponent implements OnInit {
  pizzaId: string;
  public pizza: Pizza;

  constructor(route: ActivatedRoute, private pizzaSvc: PizzaService) {
    this.pizzaId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    const id = parseInt(this.pizzaId, 10);

    this.pizzaSvc.getPizza(id).subscribe((response) => {
      this.pizza = response;
    });
  }
}
