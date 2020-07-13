import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() removePizza = new EventEmitter();
  @Output() editPizza = new EventEmitter();

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  editPizzaHandler(id) {
    this.editPizza.emit(id);
  }

  removePizzaHandler(id) {
    this.removePizza.emit(id);
  }
}
