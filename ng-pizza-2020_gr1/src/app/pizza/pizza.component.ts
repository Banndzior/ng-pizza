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

  constructor( private pizzaSvc: PizzaService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    this.getPizza();
    this.pizzaSvc.onChange.subscribe(()=>{
      this.getPizza();
      
    })
  }

  getPizza(){
    this.pizzaSvc.getPizzas().subscribe(response => {
      
      if(this.name){
        this.pizzas = response.value;
        this.pizzas = this.pizzas.filter( pizza => pizza.name.includes(this.name));
      } else {
        this.pizzas = response.value;
      }
    });
  }

  addPizza(pizza: Pizza) {
    this.pizzaSvc.addPizza(pizza).subscribe(() => this.ngOnInit());
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(() => {
      this.ngOnInit();
    });
  }
}
