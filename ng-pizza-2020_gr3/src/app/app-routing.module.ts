import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { PizzaSearchComponent } from "./pizza-search/pizza-search.component";
import { PizzaHomeComponent } from "./views/pizza-home/pizza-home.component";

// TODO 6: Stworz routing dla listy pizz: pizza component (/pizza)
// TODO 6+: Stworz routing dla pizzy po jej id/nazwie (/pizza/:id)
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy (pizza/search/:name)

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaHomeComponent },
  { path: "pizza/pizza-creator", component: PizzaEditorComponent },
  { path: "pizza/search", component: PizzaSearchComponent },
  { path: "pizza/search/:name", component: PizzaComponent },
  { path: "pizza/:id", component: PizzaItemComponent },
  { path: "**", redirectTo: "PizzaHomeComponent" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
