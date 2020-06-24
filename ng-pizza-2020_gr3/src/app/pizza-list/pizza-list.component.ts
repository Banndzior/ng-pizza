import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { ActivatedRoute, Router } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";
import { CommonService } from "../shared/common.service";
import { PizzaService } from "../pizza.service";

// [routerLink]="[pizza.id]"

@Component({
  selector: "app-pizza-list",
  template: `
    <section class="pizza-list">
      <app-pizza-list-item
        *ngFor="let pizza of pizzas"
        [pizza]="pizza"
        [selected]="selectedPizza"
        (click)="select(pizza)"
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

  constructor(private route: ActivatedRoute, private common: CommonService) {}

  ngOnInit() {
    this.getList();
    this.common.refreshList(this.pizzas);
    this.common.actualPizzasList.subscribe((list) => {
      this.pizzas = list;
    });
  }

  getList() {
    this.pizzas = this.route.snapshot.data["pizzas"].value.slice(
      this.first,
      this.last
    );
    this.common.refreshList(this.pizzas);
  }

  getNext(event: PageEvent) {
    this.first = event.pageSize * event.pageIndex;
    this.last = event.pageSize * event.pageIndex + this.pageSize;
    this.getList();
    this.common.changeOptionsStatus(null);
    this.selectedPizza = null;
  }

  select(pizza) {
    if (this.selectedPizza && pizza.id === this.selectedPizza.id) {
      this.selectedPizza = null;
      this.common.changeOptionsStatus(null);
    } else {
      this.selectedPizza = pizza;
      this.common.changeOptionsStatus(pizza);
    }

    console.log(this.selectedPizza);
  }
}
