import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "Kamila Pizza",
        description: "...",
      })
      .subscribe(() => this.pizzaSvc.onChange.emit());
  }
}
