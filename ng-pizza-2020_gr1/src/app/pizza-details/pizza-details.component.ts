import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzaService} from '../pizza.service';
import { Pizza } from '../pizza';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styles: [`
    .custom-container {
      background: linear-gradient(to right, #ffe259, #ffa751);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 5rem 0 8rem 0;
    }
    .custom-card {
      width: 40rem;
      overflow: hidden;
    }
    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .custom-title {
      font-size: 2rem;
      font-weight: 500;
    }
    .custom-button {
      margni: 0 2rem 0 1rem;
    }
  `]
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
    this.pizzaService.modifyPizza(this.pizza.id, value.photoUrl);
    this.getPizza(this.pizza.id);
  }
}
