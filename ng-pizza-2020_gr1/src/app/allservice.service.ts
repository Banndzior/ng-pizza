import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AllService {
  constructor() {}

  private navBtnStatus = new BehaviorSubject<boolean>(false);
  actualBtnStatus = this.navBtnStatus.asObservable();

  changeBtnStatus(status: boolean) {
    this.navBtnStatus.next(status);
  }

  private searchText = new BehaviorSubject<string>('');
  // private submitSearch = new BehaviorSubject<boolean>(false);

  // actualSearchStatus = this.searchText.asObservable();

  // searchPizzaText(text: string) {
  //   console.log(this.searchText.next(text));
  // }

  emitSearchEvent(msg: string){
    this.searchText.next(msg)
  }
  searchPizzaEvent(){
    return this.searchText.asObservable();
  } 

  // emitSearchSubmitEvent(msg: boolean){
  //   this.submitSearch.next(msg)
  // }
  // searchSubmitEvent(){
  //   return this.submitSearch.asObservable();
  // } 

}