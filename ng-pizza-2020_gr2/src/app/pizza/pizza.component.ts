import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) { }

  ngOnInit() {
    this.pizzaSvc.getPizzas().subscribe(response => {
      console.log(response);
      this.pizzas = response.value;
    });
  }

  addPizza() {
    this.pizzaSvc.addPizza({
      name: 'testPizza',
      description: 'testtest'
    }).subscribe(_ => {
      this.pizzaSvc.getPizzas().subscribe(response => {
        console.log(response);
        this.pizzas = response.value;
      });
    });
  }

  removePizza(pizzaId: number) {
    // ... http.delete
    // this.pizzaSvc, this.removePizza(pizzaId).subscribe(response => { console.log(response); })
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }

}
