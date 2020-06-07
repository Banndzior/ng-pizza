import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url: string = "https://ng-pizza.azurewebsites.net";

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  getPizza(id: number): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas/${id}`);
  }

  addPizza(newPizza: Pizza) {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, newPizza);
  }

  removePizza(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${id}`);
  }

  updatePizza(id: number, pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.url}/api/pizzas/${id}`, pizza);
  }
}
