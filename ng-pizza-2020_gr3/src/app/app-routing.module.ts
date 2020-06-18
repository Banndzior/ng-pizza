import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";

// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/edit", component: PizzaEditorComponent },
  { path: "pizza/:id", component: PizzaItemComponent },
  { path: "pizza/:id/edit", component: PizzaEditorComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
