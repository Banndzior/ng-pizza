import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  private url: string = "https://ng-pizza.azurewebsites.net";

  constructor(private http: HttpClient) {}

  getPizzaList(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${this.url}/api/pizzas`);
  }

  getPizza(id): Observable<any> {
    return this.http.get<any>(`${this.url}/api/pizzas/${id}`);
  }

  addPizza(newPizza: Pizza) {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, newPizza);
  }

  removePizza(pizza: Pizza) {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }

  editPizza(pizza: Pizza) {
    return this.http.put<Pizza>(`${this.url}/api/pizzas/${pizza.id}`, pizza);
  }

  getUrlPattern() {
    return `(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?`;
  }
}
