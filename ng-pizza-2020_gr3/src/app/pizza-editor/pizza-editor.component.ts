import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import {NgForm} from "@angular/forms";
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
  register(event, myForm: NgForm) {
    if(myForm.valid) {
      console.log('register',  myForm.value);
      this.pizzaSvc
      .addPizza(myForm.value)
      .subscribe(() => this.router.navigate(['pizza']));
    } else {
      console.log('register',  myForm.value);
      alert('NIE!');
    }
  }
}
