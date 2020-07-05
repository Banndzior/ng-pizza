import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  myFormGroup = new FormGroup({
    pizzaName: new FormControl("", [Validators.required]),
    pizzaUrl: new FormControl(
      "https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/pizza-grecka.jpg",
      [Validators.required]
    ),
    pizzaDescription: new FormControl("", [Validators.required]),
  });

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  addPizza() {
    if (this.myFormGroup.valid) {
      console.log(
        this.myFormGroup.get("pizzaName").value,
        this.myFormGroup.get("pizzaUrl").value,
        this.myFormGroup.get("pizzaDescription").value
      );
      this.pizzaSvc
        .addPizza({
          name: this.myFormGroup.get("pizzaName").value,
          description: this.myFormGroup.get("pizzaDescription").value,
          photoUrl: this.myFormGroup.get("pizzaUrl").value,
        })
        .subscribe((response) => {
          console.log(response);
          this.pizzaSvc.onPizzaChange.emit();
        });
    }
  }

  hasError(controlName: string) {
    return (
      this.myFormGroup.get(controlName).errors &&
      this.myFormGroup.get(controlName).touched
    );
  }
}
