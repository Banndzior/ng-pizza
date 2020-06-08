import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      console.log(response);
      this.pizzas = response.value;
    });
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "testPizza",
        description: "test-test",
      })
      .subscribe((_) => {
        this.pizzaSvc.getPizzas().subscribe((response) => {
          console.log(response);
          this.pizzas = response.value;
        });
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
