import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-home",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  onChange(value) {
    const expression = new RegExp(value, "i");
    this.items = this.allItems.filter((pizza) => expression.test(pizza.name));
  }
  items: Pizza[];
  //wszystkie
  allItems: Pizza[];
  //przefiltrowane
  pageSize: Number = 9;
  name: string;
  pageOfItems: Array<any>;

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.getPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.getPizzas());
  }

  getPizzas() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      this.allItems = response.value;
      if (this.name) {
        this.allItems.filter((pizza) => pizza.name.includes(this.name));
      }
      this.items = this.allItems;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    console.log(pageOfItems);
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
