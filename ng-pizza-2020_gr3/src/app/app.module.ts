import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaEditorComponent } from './pizza-editor/pizza-editor.component';
import { FormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TODO 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// TODO 2: Dodaj komponent PizzaEditor za pomoca Angular CLI: ng g c pizza-editor

@NgModule({
  declarations: [AppComponent, PizzaComponent, PizzaItemComponent, PizzaEditorComponent, JwPaginationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgbModule, BrowserAnimationsModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
