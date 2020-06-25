import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav nav-tabs justify-content-end custom-nav">
      <a routerLink="/" class="nav-link">Home</a>
      <a routerLink="/new" class="nav-link">New pizza</a>
    </nav>
  `,
  styles: [`
    .custom-nav {
      margin: 20px 0;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
