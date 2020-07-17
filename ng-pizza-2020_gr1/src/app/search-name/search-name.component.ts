import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css']
})
export class SearchNameComponent implements OnInit {
  searchName: '';
  pizzas: Pizza[];
  pizza: Pizza

  constructor(
    private route: ActivatedRoute,
    private PizzaSvc: PizzaService,
  ) { 
  }

  ngOnInit() {
    this.searchName = this.route.snapshot.paramMap.get('name');
    this.getPizzas();
    console.log(this.searchName);
  }

  getPizzas() {
    const list = this.PizzaSvc.getPizzas().subscribe( response => {
       return this.searchName 
        ? 
          this.pizzas = response.value.filter( pizza => pizza.name.toLowerCase().includes(this.searchName.toLowerCase())) 
        : 
          this.pizzas = response.value;
      });
    console.log(list);
  }
}
