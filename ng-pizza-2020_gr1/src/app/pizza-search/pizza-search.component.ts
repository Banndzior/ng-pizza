import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-pizza-search',
  templateUrl: 'pizza-search.component.html',
  styles: [``]
})
export class PizzaSearchComponent implements OnInit {
  name = '';
  pizzas: Pizza[];
  selectedId = [];
  pizzaName = '';

  constructor(
    private pizzaSvc: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.name = this.route.snapshot.paramMap.get('name');
        this.getPizzas();
        this.pizzaSvc.onChange.subscribe(() => {
          this.getPizzas();
        });
      }
    })
  }

  ngOnInit() {}

  getPizzas() {
    if(this.name) {
      this.pizzaSvc.getAllPizzas().subscribe( response => {
        this.pizzas = response.value.filter( pizza => pizza.name.toLowerCase()
          .includes(this.name.toLowerCase()) );
      });
    } else {
     this.pizzaSvc.getAllPizzas().subscribe( resp => this.pizzas = resp.value );
    }
  }

  handleClick(id: number) {
    if(this.selectedId.includes(id)){
      this.selectedId = this.selectedId.filter( item => item !== id );
    } else {
      this.selectedId.push(id);
    }
  }

  handleSubmit(value, form){
    this.router.navigate(['search/', value.pizzaName]);
    this.getPizzas();
  }
}
