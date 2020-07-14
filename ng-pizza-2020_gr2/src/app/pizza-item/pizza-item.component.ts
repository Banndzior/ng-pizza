import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() removePizza = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  editPizzaHandler(id: number) {
    this.router.navigateByUrl(`pizza/${id}/edit`);
  }

  removePizzaHandler(id) {
    this.removePizza.emit(id);
  }
}
