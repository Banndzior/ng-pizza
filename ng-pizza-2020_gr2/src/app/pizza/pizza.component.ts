import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[] = [];
  pageSize: number = 8;
  totalPizzas: number;
  filterQuery: string | null = "";

  constructor(private pizzaSvc: PizzaService, private router: Router) {}

  ngOnInit() {
    this.getPizza();
  }

  getPizza(offset = 0) {
    this.pizzaSvc.getPizzas(this.pageSize, offset).subscribe((response) => {
      this.pizzas = response.value;
      this.totalPizzas = response.size;
    });
  }

  addPizzaHandler() {
    this.pizzaSvc
      .addPizza({
        name: "testPizza",
        description: "test-test",
        photoUrl:
          "https://www.zywnosc.com.pl/wp-content/uploads/2018/02/pizza-690x460.png",
      })
      .subscribe(() => {
        this.getPizza();
      });
  }

  removePizzaHandler(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  // updatePizza(pizzaId: number) {
  //   // ... http.put
  // }

  pageChangeHandler(pageIndex: number) {
    console.log(pageIndex);
    this.getPizza(pageIndex);
    console.log(this.totalPizzas);
  }

  filterPizzas(searchQuery: string) {
    this.filterQuery = searchQuery;
  }
}
