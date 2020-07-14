import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-edit-pizza",
  templateUrl: "./edit-pizza.component.html",
  styleUrls: ["./edit-pizza.component.css"],
})
export class EditPizzaComponent implements OnInit {
  public pizzaId: string;
  public pizza: Pizza;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private pizzaSvc: PizzaService
  ) {
    this.pizzaId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    const id = parseInt(this.pizzaId, 10);

    this.pizzaSvc.getPizza(id).subscribe((response) => {
      this.pizza = response;
    });
  }

  onSaveHandler(editedPizza: Pizza) {
    console.log(editedPizza);
    this.pizzaSvc.editPizza(editedPizza).subscribe(({ id, name }) => {
      this.router.navigateByUrl(`pizza/${id}/${name}`);
    });
  }
}
