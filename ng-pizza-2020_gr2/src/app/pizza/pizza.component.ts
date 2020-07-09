import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get("name");
    this.loadPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.loadPizzas());
  }

  loadPizzas() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      console.log(response);
      this.pizzas = response.value;
    });
  }

  removePizza(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }
}
