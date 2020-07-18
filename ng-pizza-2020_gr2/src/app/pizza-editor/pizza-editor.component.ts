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
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),

    pizzaDescription: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(200),
    ]),

    pizzaImgUrl: new FormControl("", [Validators.required]),
  });

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  addPizza(form: NgForm) {
    this.pizzaSvc
      .addPizza({
        name: form.value.name,
        description: "czy działa ok?",
        photoUrl: form.value.img,
        // "https://www.zajadam.pl/wp-content/uploads/2015/02/pizza-ze-szpinakiem-1-654x447.jpg",
      })
      .subscribe((_) => {
        this.pizzaSvc.onChange.emit();
      });
  }
}
