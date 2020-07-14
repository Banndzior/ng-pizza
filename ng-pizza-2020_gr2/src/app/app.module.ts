import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { ThreeDotsPipePipe } from "./pipes/three-dots-pipe.pipe";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";
import { HeaderComponent } from "./header/header.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';

// DONE 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// DONE 2: Dodaj komponent PizzaEditor za pomoca Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    ThreeDotsPipePipe,
    PizzaDetailsComponent,
    HeaderComponent,
    FilterPipe,
    AddPizzaComponent,
    EditPizzaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
