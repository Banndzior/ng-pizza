import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url = "https://ng-pizza.azurewebsites.net";

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }
  removePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }
}
