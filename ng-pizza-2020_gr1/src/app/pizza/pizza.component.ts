import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styles: [
    `
      .paggination-container {
        display: flex;
        margin-top: 30px;
        justify-content: center;
      }

      /deep/ .paggination-bar .ngx-pagination .current {
        background: #673ab7;
      }
    `,
  ],
  // styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  page: number = 1;
  pageSize = 5;
  total: number = 0;
  selectedId: [number];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.getPizzas();
    this.pizzaSvc.onPizzaChange.subscribe(() => {
      this.getPizzas();
    });
  }

  getPizzas() {
    this.pizzaSvc
      .getAllPizzas(this.page, this.pageSize)
      .subscribe((response) => {
        this.pizzas = response.value;
        this.total = response.size;
      });
  }

  onPageChange(event: number) {
    this.page = event;
    this.getPizzas();
  }

  handleClick(id: number) {
    // this.selectedId = id === this.selectedId ? 0 : id;
    if (this.selectedId.includes(id)) {
      // this.selectedId = this.selectedId.filter((item) => item !== id);
    } else {
      this.selectedId.push(id);
    }
  }
}
