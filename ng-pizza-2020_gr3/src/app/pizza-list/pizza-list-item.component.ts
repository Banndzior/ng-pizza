import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-list-item",
  template: `
    <mat-card class="card" *ngIf="pizza" [class.selected]="selected === pizza">
      <mat-card-header>
        <mat-card-title>{{
          (pizza.name | slice: 0:15) + (pizza.name.length > 15 ? "..." : "")
        }}</mat-card-title>
        <mat-card-subtitle
          >{{
            (pizza.description | slice: 0:20) +
              (pizza.description.length > 20 ? "..." : "")
          }}
        </mat-card-subtitle>
      </mat-card-header>
      <div class="card-image">
        <img
          [src]="pizza.photoUrl"
          alt="pizza photo"
          (error)="errorHandler($event)"
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

  errorHandler(event) {
    if (event) {
      console.warn(
        `No image provided or invalid image url ${this.pizza.photoUrl}\nReplaced by placeholder image`
      );
      this.pizza.photoUrl = "assets/pizzaPlaceholder.png";
    }
  }

  constructor() {}

  ngOnInit() {}
}
