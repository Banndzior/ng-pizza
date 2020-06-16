import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
import { ActivatedRoute } from "@angular/router";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (!isNullOrUndefined(id)) {
      this.pizzaSvc
        .getPizza(parseInt(id, 10))
        .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
    }
  }

  removePizza(pizza: Pizza) {
    console.log(pizza.id);
    this.pizzaSvc
      .removePizza(pizza)
      .subscribe(() => this.pizzaSvc.onPizzaChange.emit());
  }
}
