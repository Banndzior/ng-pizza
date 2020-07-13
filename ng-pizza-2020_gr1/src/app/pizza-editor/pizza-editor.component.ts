import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styles: [`
    .custom {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to right, #ffe259, #ffa751);
      padding: 6rem 0 6rem 0;
    }
    .custom-card {
      width: 40rem;
      background-color: white;
      z-index: 5;
    }
    .item {
     margin: 16px;
     padding: 8px;
    }
    .custom-form {
      margin: 20px;
      padding: 10px;
    }
  `]
})
export class PizzaEditorComponent implements OnInit {
  constructor(
    private pizzaSvc: PizzaService,
  ) {}

  ngOnInit() {}

  addPizza(formValue: any, pizzaForm: NgForm) {
    if (pizzaForm.valid) {
      this.pizzaSvc
        .addPizza({
          name: formValue.pizzaName,
          description: formValue.description,
          photoUrl: formValue.imageUrl,
        })
        .subscribe(() => {
            pizzaForm.reset();
            alert('Pizza dodana!');
          },
          (e) => {
            alert('Wystąpił błąd! Nie udało się dodać pizzy');
            console.log(e.message);
        });
    }
  }
}
