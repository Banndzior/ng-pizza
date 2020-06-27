import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css'],
})
export class PizzaEditorComponent implements OnInit {
  constructor(private pizzaSvc: PizzaService) { }
  ngOnInit() { }

  nameForm: string;
  descriptionForm: string;
  imageForm: string;

  addPizza(formValue: any, pizzaForm: NgForm) {
    if (pizzaForm.valid) {
      this.pizzaSvc
        .addPizza({
          name: formValue.pizzaName,
          description: formValue.description,
          photoUrl: formValue.imageUrl,
        })
        .subscribe(() => this.pizzaSvc.onChange.emit());
    }


  }
  remove() {
    this.nameForm = '';
    this.descriptionForm = '';
    this.imageForm = '';
  }

}
