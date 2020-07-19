import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  @Input()
  selectedId: [number];

  constructor(private pizzaSvc: PizzaService) {}

  // ngOnInit() {
  //   const id = this.route.snapshot.paramMap.get("id");

  //   if (!isNullOrUndefined(id)) {
  //     this.pizzaSvc
  //       .getPizza(parseInt(id, 10))
  //       .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
  //   }
  // }

  ngOnInit() {}

  removePizza() {
    this.pizzaSvc
      .removePizza(this.pizza)
      .subscribe(() => this.pizzaSvc.onPizzaChange.emit());
  }

  onError() {
    this.pizza.photoUrl = "../assets.pizza.png";
  }
}
