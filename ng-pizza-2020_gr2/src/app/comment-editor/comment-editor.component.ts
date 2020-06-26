import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-comment-editor",
  templateUrl: "./comment-editor.component.html",
  styleUrls: ["./comment-editor.component.css"],
})
export class CommentEditorComponent implements OnInit {
  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {}

  addComment(form: NgForm) {
    this.pizzaSvc
      .addComment({
        body: form.value.comment,
      })
      .subscribe((_) => {
        this.pizzaSvc.onChange.emit();
      });
  }
}
