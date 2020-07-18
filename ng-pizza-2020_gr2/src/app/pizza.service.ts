import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private apiUrl = "https://ng-pizza.azurewebsites.net";

  constructor(private http: HttpClient) {}
  onChange: EventEmitter<any> = new EventEmitter<any>();

  getPizzas(pageSize: number, pageIndex: number): Observable<PizzaResponse> {
    const limit = pageSize;
    const offset = pageIndex * limit;

    return this.http.get<PizzaResponse>(
      `${this.apiUrl}/api/pizzas?offset=${offset}&limit=${limit}`
    );
  }

  getPizza(pizzaId: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/api/pizzas/${pizzaId}`);
  }

  addPizza(newPizza: Pizza) {
    return this.http.post<Pizza>(`${this.apiUrl}/api/pizzas`, newPizza);
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(`${this.apiUrl}/api/pizzas/${pizzaId}`);
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.apiUrl}/api/pizzas/${pizza}`, pizza);
  }
}
