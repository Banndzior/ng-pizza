import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzaService} from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number( this.route.snapshot.paramMap.get('id') );
    this.getPizza(id);
  }

  getPizza(id) {
    this.pizzaService.getPizza(id).subscribe(resp => {
      this.router.navigate(['pizzas/', resp.id]);
      this.pizza = resp;
    });
  }

  onError() {
    this.pizza.photoUrl = '../assets/picture.png';
  }

  remove() {
    this.pizzaService.removePizza(this.pizza).subscribe( () => this.router.navigate(['/']) );
  }

  modify(value, form) {
    this.pizza.photoUrl = value.photoUrl;
    this.pizzaService.modifyPizza(this.pizza)
      .subscribe(() => {
          alert('Obraz zmieniony!');
          form.reset();
          this.getPizza(this.pizza.id);
        },
        (e) => {
          alert('Wystąpił błąd! Nie udało się edytować pizzy');
          console.log(e.message);
        });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.pizzaService.getAllPizzas()
        .subscribe( (pizzaResponse) => {
          const pizzas = pizzaResponse.value;
          const actualIndex = pizzas.findIndex( pizza => pizza.id === this.pizza.id);
          const nextIndex = (actualIndex + 1 === pizzas.length) ? 0 : actualIndex + 1;
          setTimeout( () => {
            this.getPizza(pizzas[nextIndex].id);
          }, 1000);
        });
    }
    if (event.key === 'ArrowLeft') {
      this.pizzaService.getAllPizzas()
        .subscribe( (pizzaResponse) => {
          const pizzas = pizzaResponse.value;
          const actualIndex = pizzas.findIndex( pizza => pizza.id === this.pizza.id);
          const nextIndex = (actualIndex === 0) ? (pizzas.length - 1) : actualIndex - 1;
          setTimeout( () => {
            this.getPizza(pizzas[nextIndex].id);
          }, 1000);
        });
    }
  }
}
