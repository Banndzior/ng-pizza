import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  template: `
    <span>
      <mat-form-field appearance="fill">
        <input matInput type="text" [(ngModel)]="value" />
      </mat-form-field>
    </span>
  `,
  styles: [``],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  value = "";

  pizzaSearch = new FormControl();

  ngOnInit() {}
}
