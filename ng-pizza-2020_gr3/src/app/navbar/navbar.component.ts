import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-navbar",
  template: `
    <mat-toolbar color="primary" class="navbar">
      <div class="container">
        <button mat-raised-button color="link" [routerLink]="['pizza/edit']">
          Add NEW pizza
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .container {
        margin: 0 auto;
        width: 1280px;
      }
      .navbar {
        box-shadow: 0px 2px 20px black;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
