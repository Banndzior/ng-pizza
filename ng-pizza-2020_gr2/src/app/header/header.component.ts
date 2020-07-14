import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { StringDecoder } from "string_decoder";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  search: string = "";

  @Output() addPizza = new EventEmitter();
  @Output() searchQuery = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  addPizzaHandler() {
    this.addPizza.emit();
  }

  onInput(value: string) {
    this.search = value;
    this.searchQuery.emit(this.search);
  }
}
