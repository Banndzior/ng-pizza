import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';

// DONE 4: Stworz routing dla listy pizz: pizza component
// TODO 7: Stworz routing dla pizzy po jej id/nazwie
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [
  { path: 'pizzas', component: PizzaComponent, pathMatch: 'full'},
  { path: 'pizzas/:id', component: PizzaItemComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: '**', redirectTo: 'pizzas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
