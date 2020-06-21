import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaSvc: PizzaService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.pizzaSvc.getPizza(parseInt(id, 10)).subscribe((pizzaResponse) => this.pizza = pizzaResponse);
  }

}
