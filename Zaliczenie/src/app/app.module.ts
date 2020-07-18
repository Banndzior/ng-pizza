import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaComponent, ThreeDotsPipe } from "./pizza/pizza.component";
import { HttpClientModule } from "@angular/common/http";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from "@angular/forms";
import { ClickOutsideModule } from "ng-click-outside";
import { PizzaNavComponent } from "./pizza-nav/pizza-nav.component";
import { ReactiveFormsModule } from '@angular/forms';


// TODO 2: Dodaj komponent PizzaEditor za pomoca Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaEditorComponent,
    PizzaNavComponent,
    ThreeDotsPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
