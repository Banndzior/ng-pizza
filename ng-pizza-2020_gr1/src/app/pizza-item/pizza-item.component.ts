import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  @Output()
  removePizza = new EventEmitter();

  constructor(private route: ActivatedRoute, private service: PizzaService) { }

  ngOnInit() {
    // const id = parseFloat(this.route.snapshot.paramMap.get("id"));
    // id && this.service.getPizza(id).subscribe((resp) => (this.pizza = resp));
  }

  remove() {
    this.removePizza.emit(this.pizza);
  }

  modify() {
    console.log(this.service.modifyPizza(this.pizza));
  }
}
