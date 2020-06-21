import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    // this.pizzaSvc.getPizzas().subscribe((response) => {
    //   this.pizzas = response.value;
    //   console.log(this.pizzas);
    // });
  }

  addPizza(formValue: any, pizzaForm: NgForm) {
    if (pizzaForm.valid) {
      console.log(formValue, pizzaForm);
      this.pizzaSvc
        .addPizza({
          name: formValue.pizzaName,
          description: formValue.description,
          photoUrl: formValue.imageUrl,
        })
        .subscribe(() => this.pizzaSvc.onPizzaChange.emit());
    }
  }
}
