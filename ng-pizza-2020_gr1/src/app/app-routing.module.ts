import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { PizzaSearchComponent } from "./pizza-search/pizza-search.component";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";

// 7: Stworz routing dla listy pizz: pizza component: /pizza
// 7+: Stworz routing dla pizzy po jej id/nazwie: /pizza/:id
// 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy: /pizza/search/:name

const routes: Routes = [
  { path: '', redirectTo: 'pizza', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'pizzas/:id', component: PizzaDetailsComponent },
  { path: 'pizzas/search/:name', component: PizzaSearchComponent },
  { path: 'new', component: PizzaEditorComponent },
  { path: '**', redirectTo: 'pizzas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }