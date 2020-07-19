import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { CommentResponse } from "./comments";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url: string = "https://ng-pizza.azurewebsites.net";
  constructor(private http: HttpClient) {}

  onChange: EventEmitter<any> = new EventEmitter<any>();

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`);
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.url}/api/pizzas/${id}`);
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizzaId}`);
  }

  getComments(): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(
      "https://ng-pizza.azurewebsites.net/api/comments"
    );
  }
}
