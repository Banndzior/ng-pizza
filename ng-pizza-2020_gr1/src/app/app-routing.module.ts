import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';

// Przyklad: https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr1/src/app/app-routing.module.ts
// TODO 7: Stworz routing dla listy pizz: pizza component: /pizza
// TODO 7+: Stworz routing dla pizzy po jej id: /pizza/:id
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy: /pizza/search/:name

const routes: Routes = [
  { path: '', redirectTo: 'pizza', pathMatch: 'full' },
  { path: 'pizza', component: PizzaComponent },
  { path: '**', redirectTo: 'pizza' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
