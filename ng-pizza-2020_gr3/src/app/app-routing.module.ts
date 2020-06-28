import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";

// TODO 6: * Stworz routing dla listy pizz: pizza component
// TODO 6+: * Stworz routing dla pizzy po jej id
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy (pizza/search/:name)

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/:id", component: PizzaItemComponent },
  { path: "pizza/search/:name", component: PizzaItemComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
