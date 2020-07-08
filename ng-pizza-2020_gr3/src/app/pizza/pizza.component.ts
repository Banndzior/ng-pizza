import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, NavigationEnd } from "@angular/router";

@Pipe({ name: "dots" })
export class ThreeDotsPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    return value.length > 10 ? value.substring(0, 10) + "..." : value;
  }
}

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  pageOfPizzas: Array<Pizza>;
  selectedPizzaId: number;

  constructor(private pizzaSvc: PizzaService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getPizzas();
      }
    });

    this.selectedPizzaId = 0;
  }

  setNewSelectedId(id) {
    this.selectedPizzaId = id;
  }

  ngOnInit() {
    this.getPizzas();

    this.pizzaSvc.onPizzaChange.subscribe(() => this.getPizzas());
  }

  onChangePage(pageOfPizzas: Array<Pizza>) {
    // update current page of items
    this.pageOfPizzas = pageOfPizzas;
  }

  getPizzas() {
    this.pizzaSvc.getPizzas().subscribe(
      (response) => {
        console.log(response);
        this.pizzas = response.value;
      },
      (error) => {
        console.log("Get pizza error", error);
      }
    );
  }
}
