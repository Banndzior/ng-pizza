import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styles: [``]
})

export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  config = {
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: 1
  };
  selectedId = [];

  constructor(
    private pizzaSvc: PizzaService
  ) {}

  ngOnInit() {
    this.getPizzas();
    this.pizzaSvc.onChange.subscribe(() => {
      this.getPizzas();
    });
  }

  getPizzas() {
    this.pizzaSvc.getPizzas(this.config.currentPage, this.config.itemsPerPage)
      .subscribe(response => {
          this.pizzas = response.value;
          this.config.totalItems = response.size- this.config.itemsPerPage;
      });
  }

  pageChanged(event){
    this.config.currentPage = event;
    this.getPizzas();
  }

  handleClick(id: number) {
    // this.selectedId = id === this.selectedId ? 0 : id;
    if(this.selectedId.includes(id)){
      this.selectedId = this.selectedId.filter( item => item !== id );
    } else {
      this.selectedId.push(id);
    }
  }
}
