import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor() {}

  @Output() removePizza = new EventEmitter();

  ngOnInit() {}

  onPizzaRemove() {
    this.removePizza.emit();
  }
}
