import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'; //Helps to trigger something and to listen to something. 
                              //Subject will implement that

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
