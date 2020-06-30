import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaEditorComponent } from './pizza-editor/pizza-editor.component';
import { HomeComponent } from './home/home.component';

// DONE 4: Stworz routing dla listy pizz: pizza component
// TODO 7: Stworz routing dla pizzy po jej id/nazwie
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: '', redirectTo: 'pizza', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: PizzaEditorComponent },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'pizzas/:id', component: PizzaItemComponent },
  { path: 'pizzas/search/:name', component: PizzaComponent },
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
