import { Component, OnInit } from "@angular/core";
import { Pizza } from "../pizza";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor() {}

  newPizza: Pizza;

  ngOnInit() {}
}
