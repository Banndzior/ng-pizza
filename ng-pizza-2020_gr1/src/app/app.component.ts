import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h2 {
      color: #6c757d;
      margin-left: 5rem;
      padding: 1.2rem 1.2rem 0 1.2rem;
    }
  `]
})
export class AppComponent {
  title = 'ng-pizza';
}
