import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { HomeComponent } from "./Home/home.component";
import { SearchComponent } from "./Search/search.component";

// TODO 7: Stworz routing dla listy pizz: pizza component: /pizza
// TODO 7+: Stworz routing dla pizzy po jej id/nazwie: pizz/search/marg
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy :/pizza/id

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "pizzas", component: PizzaComponent },
  { path: "new", component: PizzaEditorComponent },
  { path: "search", component: SearchComponent },
  { path: "pizzas/:id", component: PizzaItemComponent },
  { path: "pizzas/edit/:id", component: PizzaEditorComponent },
  { path: "pizzas/search/:name", component: PizzaComponent },
  { path: "**", redirectTo: "pizzas" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy :/pizza/id
