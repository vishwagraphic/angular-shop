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
    useremail: localStorage.useremail || ''
  });
  currentUser = this.user.asObservable();
  
  changeStatus = function(currUser:object) {
    this.user.next(currUser)
  }
  
  private cart = new BehaviorSubject<any>({
    count : localStorage.cartCount || 0,
    idArr : localStorage.cartArr || {}
  });
  currCart = this.cart.asObservable();

  changeCart = function(curCart:object) {
    this.cart.next(curCart)
  }

  imgUrlExtract = function(product:any) {
    let imgArr = []
    imgArr = product.imageurls.split(',')
    for (let i = 0; i < imgArr.length; i++) {
      if (imgArr[i].indexOf('bbystatic') > -1) {
        product.imageurls = imgArr[i]
      }
    }
  }

}
