import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url = "https://ng-pizza.azurewebsites.net";

  public onPizzaChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getAllPizzas(pageIndex: number, pageSize: number): Observable<PizzaResponse> {
    const offset = pageSize * (pageIndex - 1);
    return this.http.get<PizzaResponse>(
      `${this.url}/api/pizzas?offset=${offset}&limit=${pageSize}`
    );
  }

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  getPizza(pizzaId: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.url}/api/pizzas/${pizzaId}`);
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }

  // modifyPizza(pizzaId: number, image: object): Observable<any> {
  //   return this.http.put<Pizza>(`${this.url}/api/pizzas/${pizzaId}`, image);
  // }

  modifyPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.url}/api/pizzas/${pizza.id}`, pizza);
  }

  removePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }
}
