import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { isNullOrUndefined } from 'util';

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pizzaSvc: PizzaService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!isNullOrUndefined(id)) {
      this.pizzaSvc
        .getPizza(parseInt(id, 10))
        .subscribe((pizzaResponse) => (this.pizza = pizzaResponse));
    }
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc
      .removePizza(pizza)
      .subscribe(
      (res) => {
        // this.router.navigate(['pizza']);
        console.log(res);
        this.ngOnInit();
      });
  }
}
