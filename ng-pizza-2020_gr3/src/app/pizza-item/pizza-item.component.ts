import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.pizzaSvc
      .getPizza(parseInt(id, 10))
      .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc
      .removePizza(pizza)
      .subscribe
      // () => this.getPizza(),
      // (error) => {
      //   console.log("jest blad", error);
      // }
      ();
  }
}
