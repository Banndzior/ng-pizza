import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-pagination',
  templateUrl: './pizza-pagination.component.html',
  styleUrls: ['./pizza-pagination.component.css']
})
export class PizzaPaginationComponent implements OnInit {

  constructor() { }

  @Input() pizzaList: any;
  @Output() pizzaPage: any;

  ngOnInit() {
  }

  onChangePage(pageOfItems: Array<any>){
    this.pizzaPage = pageOfItems;
  }

}
