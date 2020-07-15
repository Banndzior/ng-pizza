import { Component, Output, EventEmitter } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-pizza';
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private router: Router, private pizzaSvc: PizzaService){

  }
  submitSearch(searchValue){
    this.router.navigateByUrl(`/pizza/search/${searchValue}`);
  }
}

