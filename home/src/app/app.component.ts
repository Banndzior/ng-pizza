import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  tasksList = ['Sprzątanie kuwety', 'Gotowanie',
    'Nauka Angulara'];

  selected(jakisTask: string): void {
    console.log(jakisTask)
  }
  constructor() {
  }

}
