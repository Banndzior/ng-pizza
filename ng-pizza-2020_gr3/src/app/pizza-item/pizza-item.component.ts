import {
  Component,
  HostListener,
  OnInit,
  Pipe,
  PipeTransform,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  pizza: Pizza;
  // name: string;
  // id: string;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getPizza(id);

    // this.pizzaService.onChange.subscribe(() => this.getPizza(id));
  }

  getPizza(id) {
    this.pizzaService.getPizza(id).subscribe((resp) => {
      this.router.navigate([`id`, resp.id]);
      this.pizza = resp;
    });
  }
}

@Pipe({ name: "dots" })
export class ThreeDotsPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    let returnedString = value;
    if (value.length > 10) {
      returnedString = value.substring(0, 10) + "...";
    }
    return returnedString;
  }
}
