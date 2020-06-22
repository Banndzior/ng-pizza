import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pizza-list",
  template: `
    <ul>
      <li *ngFor="let pizza of pizzas" [routerLink]="[pizza.id]">
        <app-pizza-list-item [pizza]="pizza"></app-pizza-list-item>
      </li>
    </ul>
  `,
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pizzas = this.route.snapshot.data["pizzas"].value;
  }
}
