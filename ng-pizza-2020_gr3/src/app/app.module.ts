import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaEditorComponent } from './pizza-editor/pizza-editor.component';
import { FormsModule } from '@angular/forms';

// TODO 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// TODO 2: Dodaj komponent PizzaEditor za pomoca Angular CLI: ng g c pizza-editor

@NgModule({
  declarations: [AppComponent, PizzaComponent, PizzaItemComponent, PizzaEditorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
