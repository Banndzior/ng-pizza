import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";

// [routerLink]="[pizza.id]"

@Component({
  selector: "app-pizza-list",
  template: `
    <section class="pizza-list">
      <app-pizza-list-item
        *ngFor="let pizza of pizzas"
        [pizza]="pizza"
        (click)="select(pizza)"
        [selected]="selectedPizza"
      ></app-pizza-list-item>
    </section>
    <mat-paginator
      class="paginator"
      [pageIndex]="0"
      [pageSize]="pageSize"
      [length]="length"
      (page)="getNext($event)"
    ></mat-paginator>
  `,
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
  pageSize = 5;
  length = this.route.snapshot.data["pizzas"].value.length;
  first: number = 0;
  last: number = 5;
  selectedPizza: Pizza;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.pizzas = this.route.snapshot.data["pizzas"].value.slice(
      this.first,
      this.last
    );
  }

  getNext(event: PageEvent) {
    this.first = event.pageSize * event.pageIndex;
    this.last = event.pageSize * event.pageIndex + this.pageSize;
    this.getList();
  }

  select(pizza, pizzaItem) {
    if (this.selectedPizza && pizza.id === this.selectedPizza.id) {
      this.selectedPizza = null;
    } else {
      this.selectedPizza = pizza;
    }

    console.log(this.selectedPizza);
  }
}
