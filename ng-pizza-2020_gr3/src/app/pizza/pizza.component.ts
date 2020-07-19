import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  pageOfItems: Array<any>;
  selectedId: any;

  constructor(
    private pizzaSvc: PizzaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe();
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");

    this.getPizza();
    this.pizzaSvc.pizzaEmitter.subscribe((msg) => {
      this.getPizza();
    });

    this.pizzaSvc.onPizzaChanged.subscribe((pizzaId) => {
      this.selectPizza(pizzaId);
    });
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        if (this.name && this.name.length > 0) {
          this.pizzas = response.value.filter((pizza) => {
            return pizza.name.toLowerCase().includes(decodeURI(this.name));
          });
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

  selectPizza(id) {
    console.log(id);
    
    this.pizzas.forEach((pizza) => {
      console.log(pizza.id);
      pizza.id == id? pizza.isSelected = true : pizza.isSelected = false;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
