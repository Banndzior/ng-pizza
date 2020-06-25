import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";

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
  routeId: number;
  error = false;
  done = false;

  constructor(
    private pizzaSvc: PizzaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeId = Number( this.route.snapshot.paramMap.get('id') );
  }

  handleSubmit(formValue: any, pizzaForm: NgForm) {
    if(!this.routeId) {
      this.addPizza(formValue, pizzaForm);
    } else {
      this.editPizza(formValue, pizzaForm);
    }
  }

  addPizza(formValue: any, pizzaForm: NgForm) {
    if (pizzaForm.valid) {
      this.pizzaSvc
        .addPizza({
          name: formValue.pizzaName,
          description: formValue.description,
          photoUrl: formValue.imageUrl,
        })
        .subscribe(() => this.pizzaSvc.onChange.emit() );
    }
  }

  editPizza(formValue: any, pizzaForm: NgForm) {
    if( pizzaForm.valid) {
      this.pizzaSvc.modifyPizza( this.routeId, { photoUrl: formValue.imageURL })
        .subscribe(() => {
          this.error = false;
          this.done = true;
        }, error => this.error = true);
    }
  }
}
