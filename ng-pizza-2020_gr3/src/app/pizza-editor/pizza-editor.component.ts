import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { NgForm }   from '@angular/forms';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {}

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

  addPizza(form: NgForm) {
    this.pizzaService
      .addPizza({
        name: form.value.name,
        description: form.value.description,
        photoUrl: form.value.image
      })
      .subscribe(() => this.getPizza());
  }
}
