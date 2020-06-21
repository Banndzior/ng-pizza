import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  addPizza() {
    this.pizzaSvc.addPizza({
      name: 'Kamila Pizza',
      description: '...'
    }).subscribe(() => this.ngOnInit());
  }
}
