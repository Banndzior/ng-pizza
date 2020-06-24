import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaListComponent } from "./pizza-list/pizza-list.component";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { PizzaListResolverService } from "./pizza-list/pizza-list-resolver.service";

// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  {
    path: "",
    redirectTo: "pizza",
    pathMatch: "full",
  },
  { path: "pizza/edit", component: PizzaEditorComponent },
  {
    path: "pizza",
    component: PizzaListComponent,
    resolve: { pizzas: PizzaListResolverService },
  },
  { path: "pizza/:id", component: PizzaDetailsComponent },
  { path: "pizza/:id/edit", component: PizzaEditorComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PizzaListResolverService],
})
export class AppRoutingModule {}
