import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css'],
})
export class PizzaItemComponent implements OnInit {
  isVisible = false;
  newImage = '';
  onFocus = 'card';
  pizzas: Pizza[];

  @Input()
  pizza: Pizza;


  @Output()
  removePizza = new EventEmitter();

  @Output()
  changePizza = new EventEmitter();

  @Output()
  getPizza1 = new EventEmitter();

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) { }

  ngOnInit() {
    // const id = parseFloat(this.route.snapshot.paramMap.get("id"));
    // id && this.service.getPizza(id).subscribe((resp) => (this.pizza = resp));
  }

  typeImage(event) {
    this.newImage = event.target.value;
    console.log(this.newImage);
  }
  remove() {
    this.removePizza.emit(this.pizza);
  }

  modify() {
    this.isVisible = !this.isVisible;
  }

  change() {
    this.pizza.photoUrl = this.newImage;
    this.newImage = '';
    this.changePizza.emit(this.pizza);
  }

  changeFocusIn() {
    if (this.onFocus === 'downFocus') {
      this.onFocus = 'downFocus';
    } else {
      this.onFocus = 'onFocus';
    }
  }
  changeFocusOut() {
    if (this.onFocus === 'downFocus') {
      this.onFocus = 'downFocus';
    } else {
      this.onFocus = 'card';
    }
  }

  changeFocusDown() {
    (this.onFocus === 'downFocus') ? this.onFocus = 'onFocus' : this.onFocus = 'downFocus';
  }
  onError() {
    this.pizza.photoUrl = '../assets/img/brak_obrazka.png';
  }

  // getOnePizza(id) {
  //   //this.getPizza1.emit(id);
  //   this.pizzaSvc.getPizza(id).subscribe(response => {
  //     console.log('getOnePizza id : ' + response.id);
  //     this.pizzas = [response];
  //     console.log('coś' + this.pizza.description);
  //   });
  //}

}
