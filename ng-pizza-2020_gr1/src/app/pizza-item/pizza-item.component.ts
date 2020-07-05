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
    console.log(pizza.id);
    this.pizzaSvc.removePizza(pizza).subscribe(
      () => this.pizzaSvc.onChangePizza.emit(),
      (error) => console.error(error));
  }

  modifyPizza(pizza: Pizza) {
    console.log(pizza.id);
    this.pizzaSvc.modifyPizza({
      name: pizza.name,
      description: pizza.description,
      photoUrl: 'https://image.freepik.com/free-photo/pizza-with-tomatoes-spaghetti-corn-olives-mushrooms-top-view-dark-blue-background_176474-4620.jpg'
    }).subscribe(() => this.pizzaSvc.onChangePizza.emit(),
    (error) => console.error(error));
  }
}
