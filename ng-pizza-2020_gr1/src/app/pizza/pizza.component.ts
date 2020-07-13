import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styles: [`
    .custom {
      margin-top: 3rem;
    }
    .list {
      margin: 0 0 3rem 0;
    }
    /deep/.pagination {
      display: flex;
      justify-content: center;
      padding-right: 5rem!important;
    }
    /deep/.ngx-pagination .current {
      background-color: #6c757d!important;
      margin-bottom: 3rem;
    }
  `]
})

export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  config = {
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: 1
  };
  selectedId = [];

  constructor(
    private pizzaSvc: PizzaService
  ) {}

  ngOnInit() {
    this.getPizzas();
    this.pizzaSvc.onChange.subscribe(() => {
      this.getPizzas();
    });
  }

  getPizzas() {
    this.pizzaSvc.getPizzas(this.config.currentPage, this.config.itemsPerPage)
      .subscribe(response => {
          this.pizzas = response.value;
          this.config.totalItems = response.size;
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.getPizzas();
  }

  handleClick(id: number) {
    // this.selectedId = id === this.selectedId ? 0 : id;
    if (this.selectedId.includes(id)) {
      this.selectedId = this.selectedId.filter( item => item !== id );
    } else {
      this.selectedId.push(id);
    }
  }
}
