import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";

// TODO 7: Stworz routing dla listy pizz: pizza component: /pizza
// TODO 7+: Stworz routing dla pizzy po jej id/nazwie: pizz/search/marg
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy :/pizza/id

const routes: Routes = [
  { path: "", redirectTo: "rectangle", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
