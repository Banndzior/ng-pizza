import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})

export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  idNumber: string;
  constructor(private pizzaSvc: PizzaService,
    private route: ActivatedRoute,
    private router: Router) {
    this.router.events.subscribe((event) => {
      // tslint:disable-next-line: align
      if (event instanceof NavigationEnd
        && event.url.startsWith('/pizza/search')) {
        this.name = this.route.snapshot.paramMap.get('name');
        console.log(event);
        this.getPizza();
      }
    });
  }


  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');

    this.getPizza();
    this.pizzaSvc.onChange.subscribe(() => {
      this.getPizza();
    });
  }

  search() {
    this.router.navigate(['pizzas/search', this.name]);
  }

  getPizza() {

    this.pizzaSvc.getPizzas().subscribe(response => {
      console.log(response.value);
      if (this.name) {
        this.pizzas = response.value.filter(pizza => pizza.name.includes(this.name));
      } else {
        // console.log( response.value[0].id)
        this.pizzas = response.value;
      }
    });
  }

  getPizza1(event) {
    this.pizzaSvc.getPizza(event).subscribe(response => {
      this.pizzas = [response];
      console.log(this.pizzas);
    });
  }
  // addPizza(pizza: Pizza) {
  //   this.pizzaSvc.addPizza(pizza).subscribe(() => this.ngOnInit());
  // }

  removePizza(pizza: Pizza) {
    // console.log('Remove  ' + pizza.name);
    this.pizzaSvc.removePizza(pizza).subscribe(() => {
      this.ngOnInit();
    });
  }

  changePizza(pizza: Pizza) {
    // console.log('Pizzzzzzzza : ' + pizza.photoUrl);
    this.pizzaSvc.changePizza(pizza).subscribe(() => {
      this.ngOnInit();
    });
  }
}
