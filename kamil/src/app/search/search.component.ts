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


  ngOnInit() {

  }

  constructor(private service: PizzaService) { }

  // search_id(event) {
  //   this.search = event.target.value;
  //   console.log(this.search);
  // }

  // @Output()
  // getPizza1(this.search) = new EventEmitter();



}
