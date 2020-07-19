import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { observable, Observable } from "rxjs";
import { PizzaService } from "./pizza.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GuardGuard implements CanActivate {
  constructor(private service: PizzaService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = next.params.id;
    return this.service.getPizza(id).pipe(
      map((resp) => {
        if (resp) {
          return true;
        } else {
          this.router.navigate(["pizzas"]);
        }
      })
    );
  }
}
