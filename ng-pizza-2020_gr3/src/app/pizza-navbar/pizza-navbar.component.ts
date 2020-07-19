import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pizza-navbar",
  templateUrl: "./pizza-navbar.component.html",
  styleUrls: ["./pizza-navbar.component.scss"],
})
export class PizzaNavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
