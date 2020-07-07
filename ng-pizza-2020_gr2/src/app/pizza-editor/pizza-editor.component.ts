import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";

import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  myFormGroup = new FormGroup({
    pizzaName: new FormControl("", [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(2),
    ]),

    pizzaDescription: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),

    pizzaImgUrl: new FormControl("", [Validators.required]),
  });
  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  addPizza(form: NgForm) {
    this.pizzaSvc
      .addPizza({
        name: form.value.name,
        description: form.value.description,
        photoUrl: form.value.img,
        active: false,
      })
      .subscribe((_) => {
        this.pizzaSvc.onChange.emit();
      });
  }
}
