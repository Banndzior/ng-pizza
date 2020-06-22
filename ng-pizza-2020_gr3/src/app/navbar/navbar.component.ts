import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <nav class="nav-bar">
      <div class="container">
        <button [routerLink]="['pizza/edit']">Stwórz pizzę</button>
      </div>
    </nav>
  `,
  styles: [
    `
      .nav-bar {
        width: 100%;
        height: 80px;
        background: red;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
