import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-list-item",
  template: `
    <div *ngIf="pizza">
      <p>
        {{ pizza.name }}
        {{ pizza.id }}
      </p>
      <br />
      <code>{{ pizza.description }}</code>
      <br />
      <img
        *ngIf="!pizza.photoUrl"
        src="assets/pizzaPlaceholder.png"
        height="100px"
      />
      <img src="{{ pizza.photoUrl }}" height="100px" />
      <br />
    </div>
  `,
  styles: [],
})
export class PizzaListItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor() {}

  ngOnInit() {}
}
