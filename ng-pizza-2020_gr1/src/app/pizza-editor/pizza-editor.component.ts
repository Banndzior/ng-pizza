import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Pizza} from '../pizza';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {
  pizza: Pizza = {
    name: 'Kamila Pizza',
    description: '...'
  };
  @Output()
  addPizza = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add () {
    this.addPizza.emit(this.pizza);
  }

}
