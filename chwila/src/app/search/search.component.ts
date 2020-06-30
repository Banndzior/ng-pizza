import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  newId = '';
  pizzas: Pizza[];

  ngOnInit() {

  }

  @Output()
  getPizza1 = new EventEmitter();

  constructor(private pizzaSvc: PizzaService, private service: PizzaService) { }

  searchId(event) {
    this.newId = event.target.value;
    console.log(this.newId);
  }

  getOnePizza(id) {
    console.log(this.newId);
    this.getPizza1.emit(this.newId);
  }

  // @Output()
  // getPizza1(this.search) = new EventEmitter();



}
