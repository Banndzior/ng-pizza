import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.scss"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  active: boolean;
  id: string;

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    if (!isNullOrUndefined(this.id)) {
      this.pizzaSvc
        .getPizza(parseInt(this.id, 10))
        .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
    }
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(() => {
      this.pizzaSvc.pizzaEmitter.emit();
    });
  }

  selectPizza() {
    this.pizzaSvc.onPizzaChanged.emit(this.pizza.id);
  }
}
