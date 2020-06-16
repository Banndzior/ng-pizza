import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url: string = "https://ng-pizza.azurewebsites.net";

  public onPizzaChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  getPizza(pizzaId: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.url}/api/pizzas/${pizzaId}`);
  }

  addPizza(newPizza: Pizza) {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, newPizza);
  }

  removePizza(pizza: Pizza) {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }
}
