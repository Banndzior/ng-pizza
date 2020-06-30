import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { SlicePipe } from '@angular/common';
import { DotsPipe } from './dots.pipe';
import { PizzaEditorComponent } from './pizza-editor/pizza-editor.component';
import { FormsModule } from '@angular/forms';
import { PizzaService } from './pizza.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { SearchComponent } from './search/search.component';

// DONE 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// DONE 2: Dodaj komponent PizzaEditor za pomoca Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    DotsPipe,
    NavbarComponent,
    HomeComponent,
    NewComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [SlicePipe, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
