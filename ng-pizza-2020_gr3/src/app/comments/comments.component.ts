import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { Comment } from '../pizza';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<any>;
    constructor(private router: Router, private pizzaSvc: PizzaService) { }

  ngOnInit() {
    this.pizzaSvc.getComments().subscribe(response=>this.comments = response.value);
  }

}
