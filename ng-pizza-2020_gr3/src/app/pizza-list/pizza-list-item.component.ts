import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../pizza";

// [ngClass]="{ selected: selected }"
@Component({
  selector: "app-pizza-list-item",
  template: `
    <mat-card class="card" *ngIf="pizza" [class.selected]="selected === pizza">
      <mat-card-header>
        <mat-card-title>{{ pizza.name }}</mat-card-title>
        <mat-card-subtitle
          >{{
            (pizza.description | slice: 0:20) +
              (pizza.description.length > 20 ? "..." : "")
          }}
        </mat-card-subtitle>
      </mat-card-header>
      <div class="card-image">
        <img
          *ngIf="pizza.photoUrl"
          src="{{ pizza.photoUrl }}"
          alt="pizza photo"
        />
        <img
          *ngIf="!pizza.photoUrl"
          src="assets/pizzaPlaceholder.png"
          alt="pizza placeholder photo"
        />
      </div>

      <mat-card-footer>
        <p class="id">
          Pizza id: #<b>{{ pizza.id }}</b>
        </p>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
      .card {
        position: relative;
        width: 200px;
        height: 350px;
        margin: 15px;
        cursor: pointer;
        user-select: none;
        transition: 0.3s;
      }
      .id {
        position: absolute;
        bottom: 0;
        right: 10px;
      }

      .card-image {
        margin: -16px;
        margin-top: 10px;
      }
      .card-image img {
        width: 232px;
        height: 232px;
        object-fit: cover;
      }
      .selected {
        background-color: #67c767;
      }
    `,
  ],
})
export class PizzaListItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() selected;

  constructor() {}

  ngOnInit() {}
}
