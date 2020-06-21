import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";

// TODO 7: Stworz routing dla listy pizz: pizza component: /pizza
// TODO 7+: Stworz routing dla pizzy po jej id/nazwie: pizz/search/marg
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy :/pizza/id

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizzas", component: PizzaComponent },
  { path: "pizzas/:id", component: PizzaComponent },
  { path: "*", redirectTo: "pizzas" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
