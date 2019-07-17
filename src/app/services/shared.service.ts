import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  private user = new BehaviorSubject<any>({
    isSigned : localStorage.isSigned || false,
    userName : localStorage.username || '',
    email: localStorage.useremail || ''
  });
  currentUser = this.user.asObservable();
  
  changeStatus = function(currUser:object) {
    this.user.next(currUser)
  }
  
  private cart = new BehaviorSubject<any>({
    count : localStorage.cartCount || 0,
    idArr : localStorage.idArr || {}
  });
  currCart = this.cart.asObservable();

  changeCart = function(curCart:object) {
    this.cart.next(curCart)
  }

}
