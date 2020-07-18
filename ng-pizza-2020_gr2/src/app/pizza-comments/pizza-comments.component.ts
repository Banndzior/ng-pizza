import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pizza-comments",
  templateUrl: "./pizza-comments.component.html",
  styleUrls: ["./pizza-comments.component.css"],
})
export class PizzaCommentsComponent implements OnInit {
  comments: Array<any>;

  constructor(route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.loadComments();

    this.pizzaSvc.onChange.subscribe(() => this.loadComments());
  }
  loadComments() {
    this.pizzaSvc.getComments().subscribe((response) => {
      this.comments = response.value;
    });
  }
}
