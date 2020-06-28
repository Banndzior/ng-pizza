import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PizzaResponse, Pizza } from './pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'https://ng-pizza.azurewebsites.net';

  constructor(private http: HttpClient) { }
  onChange: EventEmitter<any> = new EventEmitter<any>();

  getPizzas(pageIndex: number, pageSize: number): Observable<PizzaResponse> {
    const offset = pageSize * (pageIndex - 1);
    let params = new HttpParams();
    params.append('offset', offset.toString());
    params.append('limit', pageSize.toString());

    // return this.http.get<PizzaResponse>(`${this.apiUrl}/api/pizzas?offset=${offset}&limit=${pageSize}`);
    return this.http.get<PizzaResponse>(`${this.apiUrl}/api/pizzas`, { params: params });
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
}
