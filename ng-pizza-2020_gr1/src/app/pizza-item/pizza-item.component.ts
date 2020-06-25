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

  @Input()
  pizza: Pizza;


  @Output()
  removePizza = new EventEmitter();

  @Output()
  changePizza = new EventEmitter();

  constructor(private route: ActivatedRoute, private service: PizzaService) { }

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
    console.log('aaaaaaaaaaa');
  }

  modify() {
    this.isVisible = !this.isVisible;
  }

  change() {
    console.log('change');
    this.pizza.photoUrl = this.newImage;
    this.newImage = '';
    console.log(this.pizza);
    this.changePizza.emit(this.pizza);
  }

  changeFocusIn() {
    if (this.onFocus === 'downFocus') {
      this.onFocus = 'downFocus';
    } else this.onFocus = 'onFocus';

  }
  changeFocusOut() {
    if (this.onFocus === 'downFocus') {
      this.onFocus = 'downFocus';
    } else this.onFocus = 'card';

  }

  changeFocusDown() {
    (this.onFocus === 'downFocus') ? this.onFocus = 'onFocus' : this.onFocus = 'downFocus';
  }
}
