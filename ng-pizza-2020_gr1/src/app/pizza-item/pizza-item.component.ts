import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styles: [`
    .item {
      height: 500px;
      margin: 10px 0;
      max-width: 380px;
      align-self: center;
      background-color: white;
    }
    .mark {
      background-color: lightgreen;
    }
  `]
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() marked: number;
  // @Output() markedChange = new EventEmitter<number>();
  routeId: number;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    this.routeId = Number( this.route.snapshot.paramMap.get('id') );
    this.routeId && this.pizzaService.getPizza(this.routeId).subscribe(resp => {
      this.pizza = resp;
    });
  }

  remove() {
    this.pizzaService.removePizza(this.pizza).subscribe( () => this.pizzaService.onChange.emit() );
  }

  onError() {
    this.pizza.photoUrl = '../assets/picture.png';
  }
}
