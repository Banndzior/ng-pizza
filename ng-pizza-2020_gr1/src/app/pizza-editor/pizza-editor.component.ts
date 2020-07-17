import { Component, OnInit, ViewChild } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AllService } from "../allservice.service";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  private formDirective: NgForm;

  constructor(
    private pizzaService: PizzaService,
    private router: Router,
    private btnStatus: AllService,
  ) {}

  newPizza: Pizza;

  pizzaForm: FormGroup;

  name: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4),
  ]);
  description: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(8),
  ]);
  photoUrl: FormControl = new FormControl("", [
    Validators.required,
    Validators.pattern(this.pizzaService.getUrlPattern()),
  ]);

  ngOnInit() {
    this.pizzaForm = new FormGroup({
      name: this.name,
      description: this.description,
      photoUrl: this.photoUrl,
    });
  }

  addPizza() {
    this.newPizza = this.pizzaForm.value;

    this.pizzaService.addPizza(this.newPizza).subscribe(() => {
      this.router.navigate(["pizzas"]);
      this.btnStatus.changeBtnStatus(false);
    });
  }

  checkValidation(control) {
    return control.invalid && control.touched;
  }
}