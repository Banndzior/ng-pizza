import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaComponent, ThreeDotsPipe } from "./pizza/pizza.component";
import { HttpClientModule } from "@angular/common/http";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { SlicePipe } from "@angular/common";

// DONE 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// DONE 2: Dodaj komponent PizzaEditor za pomoca Angular CLI: ng g c pizza-editor

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    ThreeDotsPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SlicePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
