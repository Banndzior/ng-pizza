import { Component, Input, OnInit } from '@angular/core';

import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styles: [`
    a:hover {
      cursor: pointer;
    }
    .custom {
      max-width: 18rem;
      color: #6c757d;
      margin: 2rem 0;
    }
  `]
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() selectedId: [number];

  constructor(
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {}

  remove() {
    this.pizzaService.removePizza(this.pizza)
      .subscribe( () => this.pizzaService.onChange.emit() );
  }

  onError() {
    this.pizza.photoUrl = '../assets/picture.png';
  }
}
