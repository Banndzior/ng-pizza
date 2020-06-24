import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styles: [
    `
      .item {
        height: 500px;
        margin: 10px 0;
      }
    `
  ]
})
export class PizzaItemComponent implements OnInit {
  @Input()
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    const id = Number( this.route.snapshot.paramMap.get('id') );
    id && this.pizzaService.getPizza(id).subscribe(resp => (this.pizza = resp));
  }

  remove() {
    this.pizzaService.removePizza(this.pizza).subscribe( () => this.pizzaService.onChange.emit() );
  }

  modify() {
    console.log(this.pizzaService.modifyPizza(this.pizza));
  }

  onError() {
    this.pizza.photoUrl = '../assets/picture.png';
  }
}
