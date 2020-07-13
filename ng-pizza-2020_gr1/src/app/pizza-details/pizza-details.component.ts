import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-pizza-details',
    templateUrl: './pizza-details.component.html',
    styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
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
        this.pizza.photoUrl = '../assets/picture.png';
    }

}