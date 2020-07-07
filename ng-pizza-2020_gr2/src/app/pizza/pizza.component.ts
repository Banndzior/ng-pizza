import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SearchPipe } from "../search.pipe";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  id: string;
  pageIndex: number = 1;
  // selectedPizzaId: number = null;

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    // this.id = this.route.snapshot.paramMap.get("id");

    this.loadPizzas();

    this.pizzaSvc.onChange.subscribe(() => this.loadPizzas());
  }

  loadPizzas() {
    // this.selectedPizzaId = null;

    this.pizzaSvc.getPizzas().subscribe((response) => {
      this.pizzas = this.name
        ? response.value.filter((pizza) => pizza.name.includes(this.name))
        : response.value;
    });
  }

  removePizza(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  markActive(pizza: any) {
    pizza.active = true;
    // this.selectedPizzaId = pizza.id;
  }

  markInactive(pizza: any) {
    pizza.active = false;
    // this.selectedPizzaId = null;
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }
}
