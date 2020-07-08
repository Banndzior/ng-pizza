import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaDetailsSearchedComponent } from "./pizza-details-searched/pizza-details-searched.component";

// Przyklad: https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr1/src/app/app-routing.module.ts
// DONE 7: Stworz routing dla listy pizz: pizza component: /pizza
// DONE 7+: Stworz routing dla pizzy po jej id/nazwie: /pizza/search/marg
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy: /pizza/:id

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/id/:id", component: PizzaDetailsSearchedComponent },
  { path: "pizza/name/:name", component: PizzaDetailsSearchedComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
