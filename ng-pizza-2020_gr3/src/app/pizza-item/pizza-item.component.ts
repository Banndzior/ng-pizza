import { Component, OnInit, Input } from "@angular/core";
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
  @Input() pizza: Pizza;
  id: string;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (!isNullOrUndefined(this.id)) {
      this.pizzaService
        .getPizza(+this.id)
        .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
    }
  }

  removePizza(pizza: Pizza) {
    this.pizzaService.removePizza(pizza).subscribe(() => {
      this.router.navigate(["pizza"]);
      console.log(`usunieto pizze ${pizza.id}`);
    });
  }

  editPizza(pizza: Pizza) {
    this.router.navigate([`pizza/${pizza.id}/edit`]);
  }
}
