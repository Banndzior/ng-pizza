import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { HomeComponent } from './home/home.component';

// TODO 4: Stworz routing dla listy pizz: pizza component /pizza
// TODO 7: Stworz routing dla pizzy po jej id: /pizza/:id
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "pizzas", component: PizzaComponent },
  { path: "pizzas/search", component: PizzaComponent }, 
  { path: "pizzas/:id", component: PizzaItemComponent },           // http://localhost:4200/pizza/527
  { path: "new", component: PizzaEditorComponent },
  { path: "**", redirectTo: "pizzas" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
