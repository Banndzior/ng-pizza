import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent implements OnInit {
  @Input() item: Pizza;
  constructor(private router: Router, private pizzaSvc: PizzaService) { }

  ngOnInit() {
  }
  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: 'Margehrita',
        description: ' Salami',
      })
      .subscribe(() => this.router.navigate(['pizza']));
  }
}
