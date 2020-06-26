import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { HttpClientModule } from "@angular/common/http";
import { PizzaItemComponent } from "./pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClickOutsideModule } from "ng-click-outside";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { PizzaNavbarComponent } from './pizza-navbar/pizza-navbar.component';
import { CommentComponent } from './comment/comment.component';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';

// TODO 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// TODO 2: Dodaj komponent PizzaEditor za pomoca Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    PizzaNavbarComponent,
    CommentComponent,
    CommentEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    ClickOutsideModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
