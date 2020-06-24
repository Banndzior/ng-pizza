import { Component, OnInit } from "@angular/core";
import { CommonService } from "../shared/common.service";

@Component({
  selector: "app-navbar",
  template: `
    <mat-toolbar color="primary" class="navbar">
      <div class="container">
        <span [hidden]="status">
          <button
            (click)="changeStatus()"
            mat-raised-button
            color="link"
            [routerLink]="['pizza/edit']"
          >
            Add NEW pizza
          </button>
        </span>
        <span [hidden]="!status">
          <button
            (click)="changeStatus()"
            mat-raised-button
            color="accent"
            [routerLink]="['pizza']"
          >
            Home
          </button>
        </span>
        <app-search-bar *ngIf="!status"></app-search-bar>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .container {
        margin: 0 auto;
        width: 1280px;
        display: flex;
        justify-content: space-between;
      }
      .navbar {
        box-shadow: 0px 2px 20px black;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private btnStatus: CommonService) {}

  status: boolean;

  ngOnInit() {
    this.btnStatus.actualBtnStatus.subscribe(
      (status) => (this.status = status)
    );
  }
  changeStatus() {
    this.btnStatus.changeBtnStatus(!this.status);
  }
}
