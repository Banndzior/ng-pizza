import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { HttpClientModule } from "@angular/common/http";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { ThreeDotsPipePipe } from "./three-dots-pipe.pipe";

// DONE 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// DONE 2: Dodaj komponent PizzaEditor za pomoca Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    ThreeDotsPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
