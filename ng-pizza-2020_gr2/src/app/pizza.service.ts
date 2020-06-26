import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { CommentResponse, Comment } from "./comment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  onChange: EventEmitter<any> = new EventEmitter<any>();

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(
      "https://ng-pizza.azurewebsites.net/api/pizzas"
    );
  }

  getComments(): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(
      "https://ng-pizza.azurewebsites.net/api/comments"
    );
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>(
      "https://ng-pizza.azurewebsites.net/api/pizzas",
      pizza
    );
  }

  addComment(comment: Comment) {
    return this.http.post<Comment>(
      "https://ng-pizza.azurewebsites.net/api/comments",
      comment
    );
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(
      `https://ng-pizza.azurewebsites.net/api/pizzas/${pizzaId}`
    );
  }
}
