import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { SlicePipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { isNullOrUndefined } from "util";

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
  pageSize: number;
  page: number;
  totalRows: number;
  pageIndex: number = 0;

  constructor(private route: ActivatedRoute, private pizzaSvc: PizzaService) {
    this.pageSize = 4;
    this.page = 1;
    this.totalRows = 1;
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    console.log(this.name);

    this.loadPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.loadPizzas());

    this.route.params.subscribe((params) => (this.name = params.name));
    this.pageSize = 4;
    this.page = 1;
    if (!isNullOrUndefined(this.name)) {
      this.pizzaSvc
        .getPizzas(this.pageSize, this.page - 1)
        .subscribe((pizzaResponse) => {
          return (this.pizzas = pizzaResponse.value.filter(
            (el) => el.name === this.name
          ));
        });
    }
  }

  onChangePage() {
    this.loadPizzas();
  }

  loadPizzas() {
    this.pizzaSvc.getPizzas(this.pageSize, this.page - 1).subscribe(
      (response) => {
        this.pizzas = response.value;
        this.totalRows = response.size;
        // .filter((pizza) => pizza.name.includes(this.name) || !this.name);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  removePizza(pizzaId: number) {
    this.pizzaSvc.removePizza(pizzaId).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  updatePizza(pizza: Pizza) {
    this.pizzaSvc.updatePizza(pizza).subscribe(
      () => this.ngOnInit(),
      (error) => console.error(error)
    );
  }

  // getPizza() {
  //   this.pageSize = 4;
  //   this.page = 1;
  //   this.pizzaSvc.getPizzas(this.pageSize, this.page - 1).subscribe(
  //     (response) => {
  //       this.pizzas = response.value;
  //       this.totalRows = response.size;
  //     },
  //     (error) => {
  //       console.log("error", error);
  //     }
  //   );
  // }
}
