import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
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
    private pizzaSvc: PizzaService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPizza(id);
    this.pizzaSvc.onChangePizza.subscribe(() => {
      this.getPizza(id);
    })
  }

  getPizza(id) {
    this.pizzaSvc.getPizza(id).subscribe(resp => {
      this.pizza = resp;
    })
  }

  removePizza(pizza: Pizza) {
    console.log(pizza.id);
    this.pizzaSvc.removePizza(pizza).subscribe(
      () => this.pizzaSvc.onChangePizza.emit(),
      (error) => console.error(error));
  }

  modifyPizza(pizza, formContent) {
    pizza.photoUrl = formContent.image;
    console.log(formContent);
    console.log(pizza.name);
    this.pizzaSvc.modifyPizza(this.pizza).subscribe(() => this.pizzaSvc.onChangePizza.emit(),
    (error) => console.error(error));
  }

  onError() {
    this.pizza.photoUrl = '../assets/brak_fotki.png'
  }
}
