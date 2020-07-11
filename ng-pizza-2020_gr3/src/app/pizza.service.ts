import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaResponse, Pizza } from './pizza';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
// import { Pizza } from "../pizza";

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private url = 'https://ng-pizza.azurewebsites.net';

  pizzaEmitter = new EventEmitter();

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
    this.pizzaEmitter.emit("pizza list changed");
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }
}
