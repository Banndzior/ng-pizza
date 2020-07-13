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
  pageIndex: number = 0;
  PizzaEdit = [];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.pizzaSvc.getPizzas(this.pageIndex).subscribe((response) => {
      console.log(response);
      this.pizzas = response;
    });
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "testPizza",
        description: "test-test",
      })
      .subscribe((_) => {
        this.pizzaSvc.getPizzas(this.pageIndex).subscribe((response) => {
          console.log(response);
          this.pizzas = response;
        });
      });
  }

  removePizzaHandler(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }

  onEdit(id) {
    this.edit = !this.edit;
  }
}
