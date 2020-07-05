import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { SlicePipe } from '@angular/common';

@Pipe({ name: 'dots' })
export class ThreeDotsPipe implements PipeTransform {
  constructor(private slice: SlicePipe) {
  }

  transform(value: any, start: number, end?: number): string {
    return this.slice.transform(value, start, end) + (value.length > (end) ? '...' : '');
  }
}
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) { }

  getShortName(pizzaName: string, length = 10) {
    if (pizzaName) {
      return pizzaName.substr(0, length) + (pizzaName.length > length ? '...' : '');
    }
    return '';
  }

  ngOnInit() {
    this.getPizza();
    this.pizzaSvc.pizzaChange.subscribe(() => {
      this.getPizza();
    })
  }

  getPizza() {
    this.pizzaSvc.getPizzas().subscribe(sub => {
      this.pizzas = sub.value;
    })
  }

  addPizza() {
    this.pizzaSvc.addPizza({
      name: 'Pizzełka',
      description: 'To jest opis pizzy',
      photoUrl: 'https://d1doqjmisr497k.cloudfront.net/-/media/kamispl-2016/recipe/2000/pizza_po_sycylijsku_2000.jpg?vd=20180617T003531Z&hash=9635F277569245AF25633DA48ADF5136CB986F82',
    }).subscribe(() => this.ngOnInit());
  }
}