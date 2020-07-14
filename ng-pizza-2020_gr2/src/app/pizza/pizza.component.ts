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
  pageIndex: number;
  pageSize: number;
  totalPizzas: number;
  filterQuery: string | null = "";

  constructor(private pizzaSvc: PizzaService, private router: Router) {}

  ngOnInit() {
    this.pageSize = 6;
    this.pageIndex = 1;
    this.pizzaSvc
      .getPizzas(this.pageSize, this.pageIndex)
      .subscribe((response) => {
        this.pizzas = response.value;
        this.totalPizzas = response.size;
      });
  }

  getPizza() {
    this.pizzaSvc
      .getPizzas(this.pageSize, this.pageIndex)
      .subscribe((response) => {
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
      .subscribe((_) => {
        this.pizzaSvc
          .getPizzas(this.pageSize, this.pageIndex)
          .subscribe((response) => {
            console.log(response);
            this.pizzas = response.value;
          });
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

  editPizzaHandler(pizzaId: number) {
    this.router.navigate(["pizza", pizzaId, "edit"]);
  }

  pageChangeHandler(pageIndex: number) {
    console.log(pageIndex);
    this.getPizza();
    this.pageIndex = pageIndex;
    console.log(this.totalPizzas);
  }

  filterPizzas(searchQuery: string) {
    this.filterQuery = searchQuery;
  }
}
