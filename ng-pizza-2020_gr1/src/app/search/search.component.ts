import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [``]
})
export class SearchComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPizza(id);
  }

  getPizza(id) {
    this.pizzaService.getPizza(id).subscribe(resp => {
      this.pizza = resp;
    });
  }

  onError() {
    this.pizza.photoUrl = '../assets/img/brak_obrazka.png';
  }

  //   remove() {
  //     this.pizzaService.removePizza(this.pizza).subscribe( () => this.pizzaService.onChange.emit() );
  //   }

  //   modify(value, form) {
  //     this.pizzaService.modifyPizza(this.pizza.id, value.photoUrl);
  //     this.getPizza(this.pizza.id);
  // }
}
