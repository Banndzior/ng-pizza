import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];

    this.pizzaService.getPizza(+id).subscribe((pizzaResponse) => {
      return (this.pizza = pizzaResponse);
    });
  }

  removePizza(pizza: Pizza) {
    this.pizzaService.removePizza(pizza).subscribe(() => {
      console.log(`usunieto pizze ${pizza.id}`);
      this.router.navigate([""]);
    });
  }

  editPizza(pizza: Pizza) {
    this.router.navigate([`pizza/${pizza.id}/edit`]);
  }
}
