import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
import { ActivatedRoute, Router } from "@angular/router";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  @Input()
  selectedPizzaId: number;

  @Output()
  onSelectionChanged = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pizzaSvc: PizzaService
  ) {}

  onClick() {
    this.onSelectionChanged.emit();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const name = this.route.snapshot.paramMap.get("name");

    if (!isNullOrUndefined(id)) {
      this.pizzaSvc
        .getPizza(parseInt(id, 10))
        .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
    } else if (!isNullOrUndefined(name)) {
      console.log(name);

      this.pizzaSvc.getPizzas().subscribe((pizzaResponse) => {
        this.pizza = pizzaResponse.value.find((pizza) => {
          console.log(pizza.name.toLowerCase(), name);

          return pizza.name.toLowerCase().includes(name.toLowerCase());
        });
      });
    }
  }

  removePizza(pizza: Pizza) {
    console.log(pizza.id);
    this.pizzaSvc
      .removePizza(pizza)
      //.subscribe(() => this.pizzaSvc.onPizzaChange.emit());
      .subscribe(() => this.router.navigate(["pizza"]));
  }
}
