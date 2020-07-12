import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-pizza-navigation",
  templateUrl: "./pizza-navigation.component.html",
  styleUrls: ["./pizza-navigation.component.css"],
})
export class PizzaNavigationComponent implements OnInit {
  mySearchGroup = new FormGroup({
    searchText: new FormControl("", [Validators.required]),
  });

  constructor(private router: Router) {}

  ngOnInit() {}

  search() {
    if (this.mySearchGroup.valid) {
      const { searchText } = this.mySearchGroup.getRawValue();
      console.log(this.mySearchGroup.getRawValue());
      // this.router.navigateByUrl("/pizza/search/" + searchText);
      this.router.navigate(["/pizza/search/" + searchText]);
    }
  }
}
