import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-infos',
  templateUrl: './pizza-infos.component.html',
  styleUrls: ['./pizza-infos.component.css']
})
export class PizzaInfosComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private PizzaSvc: PizzaService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPizza(id);
  }

  getPizza(id) {
    this.PizzaSvc.getPizza(id).subscribe(resp => {
      this.pizza = resp;
    })
  }

  removePizza(pizza: Pizza) {
    console.log(pizza.id);
    this.PizzaSvc.removePizza(pizza).subscribe(
      () => this.PizzaSvc.onChangePizza.emit(),
      (error) => console.error(error));
  }

  modifyPizza(pizza, inputContent) {
    pizza.photoUrl = inputContent;
    console.log(inputContent);
    console.log(pizza.name);
    this.pizzaSvc.modifyPizza(this.pizza).subscribe(() => this.pizzaSvc.onChangePizza.emit(),
    (error) => console.error(error));
  }

  onError() {
    this.pizza.photoUrl = '../assets/brak_fotki.png'
  }
}
