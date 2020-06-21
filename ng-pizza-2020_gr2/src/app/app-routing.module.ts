import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO 6: Stworz routing dla listy pizz: pizza component
// TODO 6+: Stworz routing dla pizzy po jej id/nazwie
// https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr2/src/app/app-routing.module.ts
// TODO 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
