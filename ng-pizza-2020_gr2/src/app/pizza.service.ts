import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private apiUrl = "https://ng-pizza.azurewebsites.net";
  private totalRows = 0;

  constructor(private http: HttpClient) {}

  getPizzas(pageSize: number, pageIndex: number): Observable<PizzaResponse> {
    const limit = pageSize;
    const offset = pageIndex * limit;

    return this.http
      .get<PizzaResponse>(
        `${this.apiUrl}/api/pizzas?offset=${offset}&limit=${limit}`
      )
      .pipe(
        map((response) => {
          this.totalRows = response.size;
          return response;
        })
      );
  }

  getPizza(pizzaId: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/api/pizzas/${pizzaId}`);
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>(`${this.apiUrl}/api/pizzas`, pizza);
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(`${this.apiUrl}/api/pizzas/${pizzaId}`);
  }
  editPizza(pizza: Pizza) {
    return this.http.put<Pizza>(`${this.apiUrl}/api/pizzas/${pizza.id}`, pizza);
  }
}
