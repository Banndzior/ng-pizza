import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        console.log(response);
        this.pizzas = response.value;
      },
      (error) => {
        console.log("jest blad", error);
      }
    );
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "Margehrita",
        description: " Salami, salad XD",
      })
      .subscribe(() => this.ngOnInit());
  }

  removePizza(id: number) {
    this.pizzaSvc.removePizza(id).subscribe((response) => {
      this.ngOnInit();
    });
  }

  updatePizza(id: number, pizza: Pizza) {
    // this.pizzaSvc.updatePizza(id, pizza).su
  }
}

@Pipe({ name: "truncateString" })
export class TruncateStringPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    let returnedString = value;
    if (value.length > 10) {
      returnedString = value.substring(0, 10) + "...";
    }
    return returnedString;
  }
}
