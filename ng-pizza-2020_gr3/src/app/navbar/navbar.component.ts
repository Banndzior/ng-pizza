import { Component, OnInit } from "@angular/core";
import { CommonService } from "../shared/common.service";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
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
  length;

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
}
