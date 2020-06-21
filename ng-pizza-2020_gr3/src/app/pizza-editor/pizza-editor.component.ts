import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {
  name = new FormControl('');
  description = new FormControl('');


  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
  }

  getPizza() {
    this.pizzaService.getPizzas().subscribe(
      (response) => {
        console.log(response);
        this.pizzaService.pizzaEmitter.emit("nowa picycka");
      },
      (error) => {
        console.log("jest blad", error);
      }
    );
  }

  addPizza() {
    this.pizzaService
      .addPizza({
        name: "Margehrita",
        description: " Salami, salad XD",
      })
      .subscribe(() => this.getPizza());
  }

}
