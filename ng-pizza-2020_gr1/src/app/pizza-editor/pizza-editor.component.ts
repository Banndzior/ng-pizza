import { Component, OnInit } from '@angular/core';
import { PizzaComponent } from '../pizza/pizza.component';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {

  constructor(public PizzaComp: PizzaComponent) { }

  ngOnInit() {
    this.PizzaComp.addPizza()
  }

}