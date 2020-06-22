import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-navbar",
  template: `
    <mat-toolbar color="primary">
      <button mat-raised-button color="accent" [routerLink]="['pizza/edit']">
        Add NEW pizza
      </button>
    </mat-toolbar>
  `,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
