import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pizza-search",
  templateUrl: "./pizza-search.component.html",
  styleUrls: ["./pizza-search.component.scss"],
})
export class PizzaSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  searchPizza(pizzaPhrase) {
    let route = "pizza/search/" + `${pizzaPhrase}`;
    this.router.navigate([route]);
  }
}
