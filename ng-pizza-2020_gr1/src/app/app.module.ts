import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import {SlicePipe} from '@angular/common';
import { DotsPipe } from './dots.pipe';
import {PizzaEditorComponent} from './pizza-editor/pizza-editor.component';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './nav/nav.component';

// 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
//  2: Dodaj komponent PizzaEditor za pomoca Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    DotsPipe,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [SlicePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
