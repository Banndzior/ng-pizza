import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav nav-tabs justify-content-end custom-nav">
      <a routerLink="/" class="nav-link text-reset">Home</a>
      <a [routerLink]="['/pizzas/search', '']" class="nav-link text-reset">Search pizza</a>
      <a routerLink="new" class="nav-link text-reset">New pizza</a>
    </nav>
  `,
  styles: [`
    .custom-nav {
      color: #6c757d;
      font-weight: 500;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
