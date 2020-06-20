import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { SlicePipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Pipe({ name: "dots" })
export class ThreeDotsPipe implements PipeTransform {
  constructor(private slice: SlicePipe) {}

  transform(value: any, start: number, end?: number): string {
    return (
      this.slice.transform(value, start, end) +
      (value.length > end ? "..." : "")
    );
  }
}

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  name: string;
  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    console.log(this.name);

    this.loadPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.loadPizzas());
  }

  loadPizzas() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      this.pizzas = response.value.filter(
        (pizza) => pizza.name.includes(this.name) || !this.name
      );
    });
  }

  removePizza(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }
}
