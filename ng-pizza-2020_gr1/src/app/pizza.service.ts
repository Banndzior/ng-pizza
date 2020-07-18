import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url = "https://ng-pizza.azurewebsites.net";

  public pizzaChange = new EventEmitter();

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  getPizzaId(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.url}/api/pizzas/${id}`);
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }

  removePizza(pizza: Pizza) {
    return this.http.delete(`${this.url}/api/pizzas/${pizza.id}`);
  }

  // modPizza(pizza: Pizza) {
  //   return this.http.post(`${this.url}/api/pizzas/${pizza.id}`, pizza);
  // }
}
