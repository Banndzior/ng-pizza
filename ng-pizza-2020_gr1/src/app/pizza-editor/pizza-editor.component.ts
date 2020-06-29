import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";

enum Status {
  Pending,
  Success,
  Error
}

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styles: [`
   .item {
     margin: 16px;
     padding: 8px;
   }
   .custom-form {
      margin: 20px;
      padding: 10px;
    }
   .custom-button {
      margin: 32px;
      padding: 16px;
    }
  `]
})
export class PizzaEditorComponent implements OnInit {
  formStatus: Status;

  constructor(
    private pizzaSvc: PizzaService
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
            this.pizzaSvc.onChange.emit();
            this.formStatus = Status.Success;
          },
          (e) => {
            this.formStatus = Status.Error;
            console.log(e.message);
        });
    }
  }
}
