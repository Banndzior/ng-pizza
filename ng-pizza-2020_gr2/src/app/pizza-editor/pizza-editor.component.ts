import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  addPizza(form: NgForm) {
    this.pizzaSvc
      .addPizza({
        name: form.value.name,
        description: "czy działa ok?",
        photoUrl:
          "https://www.zajadam.pl/wp-content/uploads/2015/02/pizza-ze-szpinakiem-1-654x447.jpg",
      })
      .subscribe((_) => {
        this.pizzaSvc.onChange.emit();
      });
  }
}
