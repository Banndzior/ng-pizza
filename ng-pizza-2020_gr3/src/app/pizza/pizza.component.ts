import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;

  constructor(
    private pizzaSvc: PizzaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe();
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    // console.log(this.name);

    this.getPizza();
    this.pizzaSvc.pizzaEmitter.subscribe((msg) => {
      this.getPizza();
    });
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        // this.pizzas = r
        if (this.name.length > 0) {
          console.log(this.name);
          this.pizzas = response.value.filter((pizza) => pizza.name.includes(this.name));
        } else {
          this.pizzas = response.value;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "Margehrita",
        description: " Salami, salad XD",
      })
      .subscribe(() => this.getPizza());
  }
}
