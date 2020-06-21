import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pizzaSvc: PizzaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!isNullOrUndefined(this.id)) {
      this.pizzaSvc.getPizza(parseInt(this.id, 10)).subscribe((pizzaResponse) => this.pizza = pizzaResponse);
    }
    
  }
  removePizza(pizza: Pizza) {
    this.pizzaSvc
      .removePizza(pizza)
      // .subscribe(() => this.pizzaSvc.onPizzaChange.emit());
      .subscribe(() => this.router.navigate(['pizza']));
  }

 

}
