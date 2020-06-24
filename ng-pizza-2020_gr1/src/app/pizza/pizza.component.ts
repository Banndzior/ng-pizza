import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styles: []
})

export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  config: any;

  constructor(
    private pizzaSvc: PizzaService,
    private route: ActivatedRoute
  ) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: 1
    };
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getPizzas();
    this.setTotalItems();
    this.pizzaSvc.onChange.subscribe(() => {
      this.getPizzas();
      this.setTotalItems();
    });
  }

  getPizzas() {
    this.pizzaSvc.getPizzas(this.config.currentPage, this.config.itemsPerPage).subscribe(response => {
      console.log(response)
      if (this.name) {
        this.pizzas = response.value;
        this.pizzas = this.pizzas.filter( pizza => pizza.name.toLowerCase().includes(this.name.toLowerCase()) );
      } else {
        this.pizzas = response.value;
      }
    });
  }

  setTotalItems() {
    this.pizzaSvc.getAllPizzas().subscribe( response => this.config.totalItems = response.value.length-2 );
    console.log(this.config);
  }

  pageChanged(event){
    this.config.currentPage = event;
    this.getPizzas();
  }
}
