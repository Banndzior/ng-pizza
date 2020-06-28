import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  pageSize: number;
  page: number;
  totalRows: number;

  constructor(private pizzaSvc: PizzaService, private route: ActivatedRoute, private router: Router) {
    
   
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.getPizza();
      
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.name=params.name)
    this.pageSize=4;
    this.page=1;
    if (!isNullOrUndefined(this.name)) {
      this.pizzaSvc.getPizzas(this.pageSize,this.page-1).subscribe((pizzaResponse) => {
       return this.pizzas=pizzaResponse.value.filter(el=>el.name===this.name)
      });
    }
    
  }
  onChangePage(){
   this.getPizza();
  }



  getPizza() {
    this.pizzaSvc.getPizzas(this.pageSize, this.page-1).subscribe(
      (response) => {
        this.pizzas = response.value;
        this.totalRows = response.size;
      },
      (error) => {
        console.log('jest blad', error);
      }
    );
  }

 

 

}
