import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor() {}

  private navBtnStatus = new BehaviorSubject<boolean>(false);
  actualBtnStatus = this.navBtnStatus.asObservable();

  changeBtnStatus(status: boolean) {
    this.navBtnStatus.next(status);
    this.changeOptionsStatus(null);
  }

  private optionsStatus = new BehaviorSubject<boolean>(false);
  actualOptionsStatus = this.optionsStatus.asObservable();

  changeOptionsStatus(pizza) {
    this.optionsStatus.next(pizza);
  }

  private pizzas = new BehaviorSubject<any>([]);
  actualPizzasList = this.pizzas.asObservable();

  refreshList(pizzas) {
    this.pizzas.next(pizzas);
  }

  private listLength = new BehaviorSubject<any>(0);
  actualListLength = this.listLength.asObservable();
  refreshListLength(length) {
    this.listLength.next(length);
  }
}
