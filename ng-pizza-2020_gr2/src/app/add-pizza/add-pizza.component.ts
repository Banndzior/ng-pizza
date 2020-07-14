import { Component, OnInit, Output } from "@angular/core";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-pizza",
  templateUrl: "./add-pizza.component.html",
  styleUrls: ["./add-pizza.component.css"],
})
export class AddPizzaComponent implements OnInit {
  constructor(private pizzaSvc: PizzaService, private router: Router) {}

  ngOnInit() {}

  onSaveHandler(newPizza: Pizza) {
    this.pizzaSvc.addPizza(newPizza).subscribe(() => {
      this.router.navigateByUrl("pizza");
    });
  }
}
