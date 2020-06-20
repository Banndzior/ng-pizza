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
  pageIndex: number = 0;

  constructor(private pizzaSvc: PizzaService) { }

  ngOnInit() {
    this.pizzaSvc.getPizzas(this.pageIndex).subscribe(response => {
      console.log(response);
      this.pizzas = response.value;
    });
  }

  addPizza() {
    this.pizzaSvc.addPizza({
      name: 'testPizza',
      description: 'testtest',
      photoUrl: 'https://cdn.aniagotuje.com/pictures/articles/2020/04/3249334-v-1500x1500.jpg'
    }).subscribe(_ => {
      this.pizzaSvc.getPizzas().subscribe(response => {
        console.log(response);
        this.pizzas = response.value;
      });
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
