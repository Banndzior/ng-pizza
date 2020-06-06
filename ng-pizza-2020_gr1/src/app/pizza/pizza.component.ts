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
      console.log(this.pizzas);
    });
  }

  addPizza() {
    this.pizzaSvc.addPizza({
      name: 'Kamila Pizza',
      description: '...'
    }).subscribe(() => this.ngOnInit());
  }

  removePizza() {
    // ? usuwac
  }

  modifyPizza() {
    // ? update obrazka
  }

}
