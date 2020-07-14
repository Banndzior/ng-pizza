import { Component, OnInit } from "@angular/core";
import { Comment } from "../comments";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  pageIndex: number = 1;

  constructor(private pizzaSvc: PizzaService) {}

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
