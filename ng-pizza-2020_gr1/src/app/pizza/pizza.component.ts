import { Component, OnInit, Input } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
// import { onType } from "../search/search.component";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { AllService } from "../allservice.service";
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  page: number = 1;
  pageSize = 6;
  pizzas: Pizza[];
  name: string;
  markedId: number;
  total: number = 0;

  // @Input() pizzaText: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private pizzaSvc: PizzaService,
    private evtSvc: AllService
    ) {
      this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.name = this.route.snapshot.paramMap.get('name');
          this.getPizza();
        }
      });

    }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    this.getPizza();
    this.pizzaSvc.onPizzaChange.subscribe(() => this.getPizza());
    this.evtSvc.searchPizzaEvent().subscribe(text => this.searchPizza(text));
    // this.evtSvc.searchSubmitEvent().subscribe(val => this.handleSearchSubmit(val));
  }
  getPizza(pizzaText?) {
    this.pizzaSvc.getPizzas(this.page, this.pageSize).subscribe((response) => {
      if (pizzaText) {
           this.pizzas = response.value.filter( pizza => pizza.name.toLowerCase().includes(pizzaText.toLowerCase()))
      } 
      else if (this.name) {
        this.pizzas = response.value;
        this.pizzas = this.pizzas.filter((pizza) =>
        pizza.name.includes(this.name)
        );
      } else {
        this.pizzas = response.value;
      }
    });
  }
  onPageChange(event: number){
    this.page = event;
    this.getPizza();
  }
  handleClick(id: number ) {
    this.markedId = id === this.markedId ? 0 : id;
  }

  searchPizza(pizzaText: string){
    this.getPizza(pizzaText);
  }
//   handleSearchSubmit(value: boolean) {
//     if (value){
//       this.getPizza(pizzaText);
//       this.router.navigate(['pizzas/', value]);
//     }
//     // this.router.navigate(['pizzas/search/', value.pizzaName]);
//   }
}