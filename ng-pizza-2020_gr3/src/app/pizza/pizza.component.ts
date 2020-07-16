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
  pizzaName: string;
  pageSize: number;
  page: number;
  totalRows: number;

  constructor(private pizzaSvc: PizzaService, private route: ActivatedRoute, private router: Router) {
    this.pageSize=4;
    this.page=1;
    this.totalRows=1;
    this.pizzaName=undefined;
   
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.getPizza();
      }
    });
  }

  ngOnInit() {
    const name=this.route.snapshot.paramMap.get('name');
   if(name){
    this.page=1;
    this.totalRows=1;
      this.pizzaSvc.getPizzas(this.pageSize,this.page-1).subscribe((pizzaResponse) => {
        this.pizzas=pizzaResponse.value.filter(el=>el.name.includes(name))
      });

   }
    this.page=1;
    this.totalRows=4;
      this.pizzaSvc.getPizzas(this.pageSize,this.page-1).subscribe((pizzaResponse) => {});

    
  }
  onChangePage(){
   this.getPizza();
    
  }
 
onClickPizza(item:any){
    if(isNullOrUndefined(item.active)){
      item.active=true;
      
    }else{
      item.active=null;
    }
  }
  

  getPizza(pizzaName?:string) {
    
    this.pizzaSvc.getPizzas(this.pageSize, this.page-1).subscribe(
      (response) => {
        if(!isNullOrUndefined(pizzaName)){
          console.log(this.pizzas)
          this.pizzas = response.value.filter(el=>el.name.includes(this.pizzaName));
          
        this.totalRows = response.size;
        }else{
          this.pizzas = response.value;
          this.totalRows = response.size;
        }
       
      },
      (error) => {
        console.log('jest blad', error);
      }
    );
  }

 

 

}
