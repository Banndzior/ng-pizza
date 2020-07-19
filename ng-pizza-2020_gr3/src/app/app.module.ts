import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";

import { JwPaginationComponent } from 'jw-angular-pagination';
import { PizzaPaginationComponent } from './pizza-pagination/pizza-pagination.component';
import { PizzaNavbarComponent } from './pizza-navbar/pizza-navbar.component';
import { PizzaSearchComponent } from './pizza-search/pizza-search.component';
import { PizzaHomeComponent } from './views/pizza-home/pizza-home.component';


// TODO 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// TODO 2: Dodaj komponent PizzaEditor za pomoca Angular CLI: ng g c pizza-editor

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    JwPaginationComponent,
    PizzaPaginationComponent,
    PizzaNavbarComponent,
    PizzaSearchComponent,
    PizzaHomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
