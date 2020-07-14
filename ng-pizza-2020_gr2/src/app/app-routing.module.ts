import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";
import { AddPizzaComponent } from "./add-pizza/add-pizza.component";
import { EditPizzaComponent } from "./edit-pizza/edit-pizza.component";

// DONE 7: Stworz routing dla listy pizz: pizza component
// DONE 7+: Stworz routing dla pizzy po jej id/nazwie
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// DONE 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/addPizza", component: AddPizzaComponent },
  { path: "pizza/:id/edit", component: EditPizzaComponent },
  { path: "pizza/:id/:name", component: PizzaDetailsComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
