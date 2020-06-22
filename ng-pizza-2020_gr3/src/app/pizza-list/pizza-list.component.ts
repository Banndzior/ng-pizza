import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-pizza-list",
  template: `
    <section class="pizza-list">
      <app-pizza-list-item
        *ngFor="let pizza of pizzas"
        [routerLink]="[pizza.id]"
        [pizza]="pizza"
      ></app-pizza-list-item>
    </section>
    <mat-paginator
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
    `,
  ],
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];
  pageSize = 5;
  length = this.route.snapshot.data["pizzas"].value.length;

  first: number = 0;
  last: number = 5;

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
}
