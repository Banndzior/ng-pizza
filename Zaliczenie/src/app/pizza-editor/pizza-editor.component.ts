import { Component, OnInit, Inject } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { NgForm } from "@angular/forms";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  constructor(private pizzaSvc: PizzaService, @Inject(DOCUMENT) private document: Document) { }
  defaultpizzas = [
    "https://img3.stockfresh.com/files/r/robuart/m/32/9675962_stock-vector-hand-drawn-pizza-slice-vector-monochrome-sketch.jpg",
    "https://previews.123rf.com/images/mykate/mykate1702/mykate170200228/72278663-hand-drawn-illustration-pizza-types-of-pizza-pepperoni-margherita-hawaiian-mushroom-sketch-style.jpg",
    "https://previews.123rf.com/images/spinchuk/spinchuk1711/spinchuk171100041/89267545-pizza-sketch-fast-food-hand-drawn-illustration-on-white-background.jpg",
    "https://graphicriver.img.customer.envatousercontent.com/files/262117286/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=be968c46d6332805870ebaac777a59fe",
    "https://image.freepik.com/free-vector/pizza-vector-sketch-fast-food_152222-108.jpg"
  ];
  ngOnInit() { }
  addDefaultUrl() {
    const position = Math.floor(Math.random() * this.defaultpizzas.length);
    return this.defaultpizzas[position];
  }


  addPizza(form: NgForm) {
    this.pizzaSvc
      .addPizza({
        name: form.value.name,
        description: form.value.description,
        photoUrl: form.value.url.length > 15 ? form.value.url : this.addDefaultUrl(),
        active: false,
      })
      .subscribe((_) => {
        this.pizzaSvc.onChange.emit();
      });
    alert(`Dodałem następującą pizzę o nazwie: ${form.value.name}.`);
    // form.reset();
    this.document.location.reload();

  }


}
