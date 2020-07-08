import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-pizza-details-searched",
  templateUrl: "./pizza-details-searched.component.html",
  styleUrls: ["./pizza-details-searched.component.css"],
})
export class PizzaDetailsSearchedComponent implements OnInit {
  pizza: Pizza;
  pizzaId = 0;
  pizzaName = "pizza";
  pizzas: Pizza[];

  constructor(private route: ActivatedRoute, private PizzaSvc: PizzaService) {}

  ngOnInit() {
    this.pizzaId = Number(this.route.snapshot.paramMap.get("id"));
    this.pizzaName = String(this.route.snapshot.paramMap.get("name"));
    this.pizzaId != 0
      ? this.getSearchedById(this.pizzaId)
      : this.getSearchedByName(this.pizzaName);
  }

  getSearchedById(id) {
    this.PizzaSvc.getPizzaId(id).subscribe((resp) => {
      this.pizza = resp;
    });
  }

  getSearchedByName(name) {
    // this.PizzaSvc.getPizzaName(name).subscribe((resp) => {
    //   this.pizza = resp;
    // });
    this.PizzaSvc.getPizzas().subscribe((resp) => {
      this.pizzas = resp.value.filter((pizza) => pizza.name.includes(name));
    });
  }
}
