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

  checkId(pizza:Pizza) {
    console.log(pizza.id);
  }

  removePizza(pizza: Pizza) {
    console.log(pizza.id);
    this.pizzaSvc.removePizza(pizza).subscribe(
      () => this.pizzaSvc.onChangePizza.emit(),
      (error) => console.error(error));
  }
}
