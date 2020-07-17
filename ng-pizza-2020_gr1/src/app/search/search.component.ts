import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AllService } from '../allservice.service';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  pizzaNameText: string = null;


  constructor(
    private evtSvc: AllService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  onType(pizzaNameText: string){
    this.evtSvc.emitSearchEvent(pizzaNameText);
  }
  searchSubmit(val: boolean){
    this.router.navigate(['pizzas/search']);
  }
}
