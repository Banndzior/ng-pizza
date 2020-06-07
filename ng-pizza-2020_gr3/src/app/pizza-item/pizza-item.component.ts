import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    let pizza;

    this.pizzaSvc.getPizza(parseInt(id, 10)).subscribe((pizza) => {
      this.pizza = pizza;
    });
  }
}
