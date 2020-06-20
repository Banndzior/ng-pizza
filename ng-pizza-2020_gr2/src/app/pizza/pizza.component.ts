import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { SlicePipe } from '@angular/common';

@Pipe({ name: 'dots' })
export class ThreeDotsPipe implements PipeTransform {
  constructor(private slice: SlicePipe) {
  }

  transform(value: any, start: number, end?: number): string {
    return this.slice.transform(value, start, end) + (value.length > end ? '...' : '');
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

  ngOnInit() {
    this.loadPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.loadPizzas());
  }

  loadPizzas() {
    this.pizzaSvc.getPizzas().subscribe(response => {
      console.log(response);
      this.pizzas = response.value;
    });
  }

  removePizza(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error));
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }

}
