import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaResponse, Pizza } from './pizza';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private url = 'https://ng-pizza.azurewebsites.net';
  public onChange = new EventEmitter();

  constructor(private http: HttpClient) { }

  getPizzas(pageIndex: number, pageSize: number): Observable<PizzaResponse> {
    const offset = (pageIndex - 1) * pageSize;
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas?offset=${offset}&limit=${pageSize}`);
  }

  getAllPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.url}/api/pizzas/${id}`);
  }

  addPizza(pizza: Pizza): Observable<any> {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }

  modifyPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.url}/api/pizzas/${pizza.id}`, pizza);
  }

  removePizza(pizza: Pizza): Observable<any> {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }
}
