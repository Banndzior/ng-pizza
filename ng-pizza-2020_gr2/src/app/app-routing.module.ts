import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaCommentsComponent } from "./pizza-comments/pizza-comments.component";

// DONE 7: Stworz routing dla listy pizz: pizza component
// DONE 7+: Stworz routing dla pizzy po jej id/nazwie
// DONE 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  { path: "pizza/search/:name", component: PizzaComponent },
  { path: "pizza/:id", component: PizzaItemComponent },
  { path: "comments", component: PizzaCommentsComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
