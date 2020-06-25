import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Pizza } from "../pizza";

@Component({
  selector: "app-options",
  template: `
    <span *ngIf="pizza" class="options">
      <span class="label">Options: </span>
      <button mat-raised-button color="accent" (click)="editPizza($event)">
        Edit
      </button>
      <button mat-raised-button color="warn" (click)="deletePizza($event)">
        Delete
      </button>
    </span>
  `,
  styles: [
    `
      .options {
        position: absolute;
        top: 15px;
        left: 480px;
      }

      .options button {
        margin-left: 20px;
      }
    `,
  ],
})
export class OptionsComponent {
  @Input() pizza: Pizza;

  @Output() deleteEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  deletePizza() {
    this.deleteEvent.emit(this.pizza);
    console.log("delete");
  }
  editPizza() {
    this.editEvent.emit(this.pizza);
  }
}
