import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
import { Router } from "@angular/router";

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

  @Output()
  modifyPizza = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private service: PizzaService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = parseFloat(this.route.snapshot.paramMap.get("id"));
    id && this.service.getPizza(id).subscribe((resp) => (this.pizza = resp));
  }

  navigate(pizza): void {
    this.router.navigate(["/edit/", pizza.id]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  // TODO 15 (podświetlanie na zielono)

  mouseEnter(target) {
    target.style.backgroundColor = "green";
  }

  mouseLeave(target) {
    target.style.backgroundColor = "transparent";
  }

  //jak zrobic onclick zmiana koloru?

  // TODO 6
  remove(pizza) {
    this.service
      .removePizza(pizza)
      .subscribe(() => this.service.onChange.emit());
  }

  modify(pizza) {
    this.modifyPizza.emit(pizza);
  }
}
