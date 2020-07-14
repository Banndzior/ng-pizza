import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  routeId: number;
  pizzaForm: FormGroup;
  error = false;
  done = false;

  constructor(
    private pizzaSvc: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeId = Number(this.route.snapshot.paramMap.get("id"));
    if (this.routeId) {
      //resp?
      this.pizzaSvc.getPizza(this.routeId).subscribe((resp) => {
        this.pizzaForm.patchValue({
          name: resp.name,
          description: resp.description,
          imageUrl: resp.photoUrl,
        });
      });
    }
    this.pizzaForm = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      imageUrl: new FormControl("", Validators.required),
    });
  }

  //TODO 8
  handleSubmit(formValue: any, pizzaForm: NgForm) {
    if (!this.routeId) {
      this.addPizza(formValue, pizzaForm);
    } else {
      this.editPizza(formValue, pizzaForm);
    }
    this.navigateToList();
  }

  navigateToList(): void {
    this.router.navigate(["/pizzas/"]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  //TODO 9
  addPizza(formValue: any, pizzaForm: NgForm) {
    if (pizzaForm.valid) {
      this.pizzaSvc
        .addPizza({
          name: formValue.name,
          description: formValue.description,
          photoUrl: formValue.imageUrl,
        })
        .subscribe(() => this.pizzaSvc.onChange.emit());
    }
  }

  editPizza(formValue: any, pizzaForm: NgForm) {
    if (pizzaForm.valid) {
      this.pizzaSvc
        .modifyPizza(this.routeId, {
          name: formValue.name,
          description: formValue.description,
          photoUrl: formValue.imageUrl,
        })
        .subscribe((error) => {
          this.pizzaSvc.onChange.emit();
          this.error = error;
          this.done = true;
        });
    }
  }
}
