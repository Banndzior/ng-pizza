import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { PizzaComponent } from '../pizza/pizza.component'

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {

  constructor(private pizzaSvc: PizzaService, private pizzCom: PizzaComponent) { }

  ngOnInit() {
    this.pizzCom.getPizza();
    this.pizzaSvc.onChangePizza.subscribe(() => {
      this.pizzCom.getPizza();
    })
  }

  addPizza() {
    this.pizzaSvc.addPizza({
      name: 'Kamila Pizza',
      description: 'Lorem ipsum dolor cośtam...',
      photoUrl: 'https://hackernoon.com/hn-images/1*NqOyGKInDPoX4O0W_GmACw.jpeg'
    }).subscribe(() => this.ngOnInit());
  }
}
