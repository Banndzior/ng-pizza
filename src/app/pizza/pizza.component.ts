import { Component, OnInit, Pipe, PipeTransform, Input } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";
import { SlicePipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

// TODO 4

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
  @Input()
  items: Pizza[];
  name: string;
  pageSize: Number = 9;
  pageOfItems: Array<any>;

  constructor(private pizzaSvc: PizzaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    this.getPizzas();
    this.pizzaSvc.onChange.subscribe(() => this.getPizzas());
  }

  getPizzas() {
    this.pizzaSvc.getPizzas().subscribe((response) => {
      this.items = response.value;
      if (this.name) {
        let regExp = new RegExp(this.name, "i");
        this.items = this.items.filter((pizza) => regExp.test(pizza.name));
      }
      this.items.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  // TODO 11- stronnicowanie

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  removePizza(pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(() => this.ngOnInit());
  }

  modifyPizza(pizza, picture) {
    this.pizzaSvc.modifyPizza(pizza, picture).subscribe(() => this.ngOnInit());
  }
}
