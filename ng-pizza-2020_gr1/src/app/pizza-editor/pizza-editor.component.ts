import { Component, OnInit } from "@angular/core";
import { PizzaComponent } from "../pizza/pizza.component";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor(
    public PizzaComp: PizzaComponent,
    public pizzaSvc: PizzaService
  ) {}

  ngOnInit() {
    this.PizzaComp.getPizza();
    this.pizzaSvc.pizzaChange.subscribe(() => {
      this.PizzaComp.getPizza();
    });
  }

  addPizza() {
    this.pizzaSvc
      .addPizza({
        name: "Pizzusheen",
        description: "To jest kot pizzy",
        photoUrl:
          "https://www.pngkey.com/png/detail/5-50650_clipart-pizza-png-clipart-pusheen-eating-pizza.png",
      })
      .subscribe(() => this.ngOnInit());
  }

  modPizza(value: any) {
    this.pizzaSvc
      .addPizza({
        name: value.name,
        description: value.desc,
        photoUrl: value.image,
      })
      .subscribe(
        () => {
          this.pizzaSvc.pizzaChange.emit();
        },
        () => {
          alert("Bad pizza");
        }
      );
  }
}
