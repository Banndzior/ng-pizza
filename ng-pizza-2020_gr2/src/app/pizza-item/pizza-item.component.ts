import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  pizzaId: string;
  pizza: Pizza;

  constructor(route: ActivatedRoute, private pizzaSvc: PizzaService) {
    this.pizzaId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.pizzaSvc.getPizza(parseInt(this.pizzaId, 10)).subscribe((response) => {
      this.pizza = response;
    });
  }
}
