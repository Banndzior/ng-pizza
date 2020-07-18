import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  id: string;
  pageIndex: number = 1;
  visableEditor: boolean = false;
  // defaultPizza: string = "http://tnijurl.com/7edc1c5f2bed/";

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");

    // this.id = this.route.snapshot.paramMap.get("id");
    this.getPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.getPizzas());

  }

  getPizzas() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      this.pizzas = this.name
        ? response.value.filter((pizza) => pizza.name.toLowerCase().includes(this.name.toLowerCase()))
        : response.value;
    });
    // console.log(this.name);
  }


  removePizza(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  active(pizza: any) {
    pizza.active = true;
  }

  inactive(pizza: any) {
    pizza.active = false;
  }

  showEditor() {
    this.visableEditor = !this.visableEditor;
  }
}

@Pipe({ name: "dots" })
export class ThreeDotsPipe implements PipeTransform {
  constructor() { }

  transform(value: string): string {
    let returnedString = value;
    if (value.length > 10) {
      returnedString = value.substring(0, 10) + "...";
    }
    return returnedString;
  }
}
