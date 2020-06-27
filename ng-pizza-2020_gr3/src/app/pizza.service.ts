import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url: string = "https://ng-pizza.azurewebsites.net";
  constructor(private http: HttpClient) {}

  onChange: EventEmitter<any> = new EventEmitter<any>();

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizzaId}`);
  }
}
