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

  ngOnInit() {}

  addPizza(form: NgForm) {
    this.pizzaSvc
      .addPizza({
        name: form.value.name,
        description: "meeeeega",
      })
      .subscribe((_) => {
        this.pizzaSvc.onChange.emit();
      });
  }
}
