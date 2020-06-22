import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaListComponent } from "./pizza-list/pizza-list.component";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { PizzaListItemComponent } from "./pizza-list/pizza-list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    PizzaEditorComponent,
    NavbarComponent,
    PizzaListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
