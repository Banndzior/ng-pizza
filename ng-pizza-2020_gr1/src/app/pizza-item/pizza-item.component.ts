import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  constructor(private pizzaSvc: PizzaService) { }

  ngOnInit() {
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(
      () => { },
      (error) => console.error(error));
  }

  modifyPizza() {
    // ? update obrazka
  }
}
