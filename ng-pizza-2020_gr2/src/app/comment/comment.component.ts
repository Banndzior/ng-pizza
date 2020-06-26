import { Component, OnInit } from "@angular/core";
import { Comment } from "../comment";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"],
})
export class CommentComponent implements OnInit {
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
