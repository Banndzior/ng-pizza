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

  constructor( private pizzaSvc: PizzaService) { }


  ngOnInit() {
    this.pizzaSvc.getPizzas().subscribe(response => {
      this.pizzas = response.value;
      console.log(this.pizzas);
    });
  }

  addPizza(pizza: Pizza) {
    this.pizzaSvc.addPizza(pizza).subscribe(() => this.ngOnInit());
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(() => {
      this.ngOnInit();
    });
  }
}
