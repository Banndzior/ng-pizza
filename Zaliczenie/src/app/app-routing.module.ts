import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";


// TODO 6: Stworz routing dla listy pizz: pizza component (/pizza)
// TODO 6+: Stworz routing dla pizzy po jej id/nazwie (/pizza/:id)
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/search/:name", component: PizzaComponent },
  { path: "pizza/:id", component: PizzaComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
