import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { PageEvent } from "@angular/material/paginator";
import { PizzaService } from "../pizza.service";

// [routerLink]="[pizza.id]"

@Component({
  selector: "app-pizza-list",
  templateUrl: "pizza-list.component.html",
  styles: [
    `
      .pizza-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1310px;
        margin: 25px auto;
      }
      .paginator {
        width: 1280px;
        margin: 0 auto;
        border-radius: 6px;
      }
    `,
  ],
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];
  selectedPizza: Pizza;
  offset: number = 0;
  limit: number = 5;
  length: number;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.getPizzaList(this.offset, this.limit);
  }

  getPizzaList(offset: number, limit: number) {
    this.pizzaService.getPizzaList(offset, limit).subscribe((response) => {
      this.pizzas = response.value;
      this.length = response.size;
    });
  }

  getNext(event: PageEvent) {
    this.offset = event.pageSize * event.pageIndex;
    this.getPizzaList(this.offset, this.limit);
    this.selectedPizza = null;
  }

  select(pizza: Pizza) {
    if (this.selectedPizza && pizza.id === this.selectedPizza.id) {
      this.selectedPizza = null;
    } else {
      this.selectedPizza = pizza;
    }
  }
  delete(pizza: Pizza) {
    this.pizzaService.removePizza(pizza).subscribe(() => {
      this.getPizzaList(this.offset, this.limit);
    });
  }
  edit(pizza: Pizza) {
    console.log(`editing ${pizza.name}`);
  }
}
