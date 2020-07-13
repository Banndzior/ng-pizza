import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";

// DONE 7: Stworz routing dla listy pizz: pizza component
// DONE 7+: Stworz routing dla pizzy po jej id/nazwie
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// DONE 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/:id/:name", component: PizzaDetailsComponent },
  { path: "pizza/:id/edit", component: PizzaEditorComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
