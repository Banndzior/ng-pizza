import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  template: `
    <div class="search-bar">
      <input
        [formControl]="pizzaSearch"
        type="text"
        [(ngModel)]="value"
        placeholder="Search..."
      />
    </div>
  `,
  styles: [
    `
      .search-bar {
      }
      .search-bar input {
        background-color: #303030;
        padding: 8px 12px;
        font-size: 18px;
        border: none;
        border-radius: 6px;
        color: #fff;
      }
    `,
  ],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  value = "";

  pizzaSearch = new FormControl();

  ngOnInit() {}
}
