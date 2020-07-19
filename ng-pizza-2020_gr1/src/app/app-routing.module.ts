import { NgModule } from "@angular/core";
import { GuardGuard } from "./guard.guard";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { PizzaSearchComponent } from "./pizza-search/pizza-search.component"; //pizzza search component
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";

// DONE 4: Stworz routing dla listy pizz: pizza component /pizza
// DONE 7: Stworz routing dla pizzy po jej id/nazwie
// DONE 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizzas", pathMatch: "full" },
  { path: "pizzas", component: PizzaComponent },
  {
    path: "pizzas/:id",
    canActivate: [GuardGuard],
    component: PizzaDetailsComponent,
  },
  { path: "pizzas/search/:name", component: PizzaSearchComponent },
  { path: "add", component: PizzaEditorComponent },
  { path: "**", redirectTo: "pizzas" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
