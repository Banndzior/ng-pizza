import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Przyklad: https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr1/src/app/app-routing.module.ts
// TODO 4: Stworz routing dla listy pizz: pizza component
// TODO 7: Stworz routing dla pizzy po jej id/nazwie
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
