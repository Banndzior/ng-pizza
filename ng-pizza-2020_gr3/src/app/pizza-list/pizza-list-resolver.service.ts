import { Injectable } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class PizzaListResolverService implements Resolve<any> {
  constructor(private pizzaService: PizzaService) {}

  resolve() {
    return this.pizzaService.getPizzaList();
  }
}
