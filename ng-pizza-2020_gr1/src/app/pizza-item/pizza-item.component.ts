import { Component, OnInit, Input, Output } from "@angular/core";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
// import { PizzaComponent } from '../pizza/pizza.component';

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}
  selectedFile: PizzaItemComponent;

  removePizza(pizza: Pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(
      () => this.pizzaSvc.pizzaChange.emit(),
      (error) => console.error(error)
    );
  }

  modifyPizza(piz) {
    // const file = piz.target.files[0];
    // this.pizzaSvc.modPizza;
    console.log(piz.id);
    // ? update obrazka
  }
}
