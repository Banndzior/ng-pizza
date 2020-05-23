import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaResponse, Pizza } from './pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>('https://ng-pizza.azurewebsites.net/api/pizzas');
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>('https://ng-pizza.azurewebsites.net/api/pizzas', pizza);
  }
}
