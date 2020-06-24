import { Component, OnInit } from "@angular/core";
import { CommonService } from "../shared/common.service";
import { PizzaService } from "../pizza.service";
import { ActivatedRoute } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  template: `
    <mat-toolbar color="primary" class="navbar">
      <div class="container">
        <div>
          <span [hidden]="status">
            <button
              (click)="changeStatus()"
              mat-raised-button
              color="link"
              [routerLink]="['pizza/edit']"
            >
              Add NEW pizza
            </button>
          </span>
          <span [hidden]="!status">
            <button
              (click)="changeStatus()"
              mat-raised-button
              color="accent"
              [routerLink]="['pizza']"
            >
              Home
            </button>
          </span>
          <span *ngIf="pizza" class="options">
            <span class="label">Options: </span>
            <button mat-raised-button color="accent" (click)="edit(pizza)">
              Edit
            </button>
            <button mat-raised-button color="warn" (click)="delete(pizza)">
              Delete
            </button>
          </span>
        </div>

        <app-search-bar *ngIf="!status"></app-search-bar>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .container {
        margin: 0 auto;
        width: 1280px;
        display: flex;
        justify-content: space-between;
      }
      .navbar {
        box-shadow: 0px 2px 20px black;
      }
      .options {
        display: inline-block;
        margin-left: 50px;
      }

      .options button {
        margin-left: 20px;
      }
      .label {
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor(
    private common: CommonService,
    private pizzaService: PizzaService
  ) {}

  status: boolean;
  pizza;
  actualPizzaList;

  ngOnInit() {
    this.common.actualBtnStatus.subscribe((status) => (this.status = status));
    this.common.actualOptionsStatus.subscribe((pizza) => (this.pizza = pizza));
    this.common.actualPizzasList.subscribe(
      (pizzas) => (this.actualPizzaList = pizzas)
    );
  }

  changeStatus() {
    this.common.changeBtnStatus(!this.status);
  }

  delete(pizza) {
    this.pizzaService.removePizza(pizza).subscribe(() => {
      this.common.changeOptionsStatus(null);

      let tempList = this.actualPizzaList.filter((el) => el.id != pizza.id);

      this.common.refreshList(tempList);
    });
  }

  edit(pizza) {
    console.log(`Edit pizza: ${pizza}`);
  }
}
