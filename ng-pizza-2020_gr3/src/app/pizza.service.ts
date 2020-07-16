import { Injectable, EventEmitter, Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PizzaResponse, Pizza } from './pizza';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private url = 'https://ng-pizza.azurewebsites.net';
    // private url = 'https://localhost:3000';
  public onPizzaChange: EventEmitter<any> = new EventEmitter<any>();
  private totalRows=0;
  constructor(private router: Router, private http: HttpClient) {}


  getComments():Observable<any>{
    return this.http.get(`${this.url}/api/comments`);
  }
  getPizzas(pageSize:number, pageIndex:number): Observable<Pizza[]> {
    // const offset = pageSize*pageIndex;
    // const limit = pageSize;
    
    // return this.http
    // .get<PizzaResponse>(`${this.url}/api/pizzas?limit=${limit}&offset=${offset}`);
    const offset = pageSize*pageIndex;
    const limit = pageSize;
    
    return this.http
    .get<PizzaResponse>(`${this.url}/api/pizzas?limit=${limit}&offset=${offset}`)
    // .pipe(
    //   map(response=>{
    //     console.log(response)
    //     this.totalRows=response.size;
    //     return response.value;
    //   }),
    //   map(pizzas=>pizzas.filter(it=>it.name.startsWith("test"))))
   
   
  }

  getPizza(pizzaId: number): Observable<Pizza> {  
      return this.http.get<Pizza>(`${this.url}/api/pizzas/${pizzaId}`);
  }
 
  addPizza(newPizza: Pizza) {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, newPizza);
  }
  
  editPizza(pizzaId: number, pizza: Pizza){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.put<Pizza>(`${this.url}/api/pizzas/${pizzaId}`, pizza, httpOptions);
   
  }
  removePizza(pizza: Pizza) {
    return this.http.delete<Pizza>(`${this.url}/api/pizzas/${pizza.id}`);
  }
 

}
