import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  onChange: EventEmitter<any> = new EventEmitter<any>();

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(
      "https://ng-pizza.azurewebsites.net/api/pizzas"
    );
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>(
      "https://ng-pizza.azurewebsites.net/api/pizzas",
      pizza
    );
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(
      `https://ng-pizza.azurewebsites.net/api/pizzas/${pizzaId}`
    );
  }
}
