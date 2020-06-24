import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PizzaService } from "../pizza.service";
import { Router } from "@angular/router";
import { CommonService } from "../shared/common.service";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor(
    private pizzaService: PizzaService,
    private router: Router,
    private btnStatus: CommonService
  ) {}

  newPizza: Pizza;

  pizzaForm: FormGroup;

  name: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(5),
  ]);
  description: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(10),
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
      this.router.navigate(["pizza"]);
      this.btnStatus.changeBtnStatus(false);
    });
  }

  checkValidation(control) {
    return control.invalid && control.touched;
  }
}
