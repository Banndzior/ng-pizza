import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})

export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;

  constructor(private pizzaSvc: PizzaService, private route: ActivatedRoute) { }


  ngOnInit() {
    // this.name = this.route.snapshot.paramMap.get('name');
    this.getPizza();
    this.pizzaSvc.onChange.subscribe(() => {
      this.getPizza();
    });
  }

  getPizza() {
    console.log('getPizza z pizza.component');
    this.pizzaSvc.getPizzas().subscribe(response => {
      if (this.name) {
        this.pizzas = response.value;
        this.pizzas = this.pizzas.filter(pizza => pizza.name.includes(this.name));
      } else {
        // console.log('response dziwne= ' + response.value[0].id)
        console.log('getPizza z pizza.component - else');
        console.log(response.value);
        this.pizzas = response.value;
      }
    });
  }

  getPizza1() {
    this.pizzaSvc.getPizza(362).subscribe(response => {
      this.pizzas = [response];
    });
  }
  // addPizza(pizza: Pizza) {
  //   this.pizzaSvc.addPizza(pizza).subscribe(() => this.ngOnInit());
  // }

  removePizza(pizza: Pizza) {
    console.log('Remove  ' + pizza.name);
    this.pizzaSvc.removePizza(pizza).subscribe(() => {
      this.ngOnInit();
    });
  }

  changePizza(pizza: Pizza) {
    console.log('Pizzzzzzzza : ' + pizza.photoUrl);
    this.pizzaSvc.changePizza(pizza).subscribe(() => {
      this.ngOnInit();
    });
  }
}
