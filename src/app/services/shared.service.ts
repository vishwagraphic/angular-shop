import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  private user = new BehaviorSubject<any>({
    isSigned : localStorage.isSigned || false,
    userName : localStorage.username || ''
  });
  currentUser = this.user.asObservable();
  /* currentMessage = this.isSigned.asObservable();
  private userName = new BehaviorSubject('')
  currentName = this.userName.asObservable();
 */
  changeStatus = function(currUser:object) {
    this.user.next(currUser)
  }
  /* changeUserName = function(name: String){
    console.log(name)
    //this.user.userName.next(name)
  } */

  private cart = new BehaviorSubject<any>({
    count : localStorage.cartCount || 0,
    idArr : localStorage.idArr || {}
  });

  changeCart = function(localStorage:object) {
    this.cart.next(localStorage)
  }
  

}
