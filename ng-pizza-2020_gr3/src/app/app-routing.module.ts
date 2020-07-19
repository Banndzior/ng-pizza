import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { CommentsComponent } from "./comments/comments.component";
import { GuardService } from "./guard.service";

// TODO 6: Stworz routing dla listy pizz: pizza component (/pizza)
// TODO 6+: Stworz routing dla pizzy po jej id/nazwie (/pizza/:id)
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: "", redirectTo: "pizza", pathMatch: "full" },
  { path: "pizza", component: PizzaComponent },
  {
    path: "id/:id",
    canActivate: [GuardService],
    component: PizzaItemComponent,
  },
  {
    path: "search/:name",

    component: PizzaComponent,
  },
  { path: "comments", component: CommentsComponent },
  { path: "**", redirectTo: "pizza" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
