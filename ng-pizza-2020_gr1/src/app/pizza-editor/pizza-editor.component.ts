import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
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

  // addPizza() {
  //   this.pizzaSvc.addPizza({
  //     name: 'SimpsPizza',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     photoUrl: 'https://munchies-images.vice.com/wp_upload/Homer-Simpson-Deep-dish-pizza.jpg'
  //   }).subscribe(() => this.ngOnInit());
  // }

  addPizza(valueFromForm: any) {
      this.pizzaSvc
        .addPizza({
          name: valueFromForm.name,
          description: valueFromForm.desc,
          photoUrl: valueFromForm.image,
        }).subscribe(() => {
            alert('Picka została dodana!');
            this.pizzaSvc.onChangePizza.emit();
          },
          (e) => {
            console.log(e.message);
            alert('Coś poszło nie tak :/');
        });
  }
}
