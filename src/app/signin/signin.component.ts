import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {SigninService} from './../services/signin.service';
import {Sign} from './sign';
import { Router } from '@angular/router';
import { SharedService } from './../services/shared.service';
import { CartitemService } from '../services/cartitem.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  subscription: Subscription;
  user = new Sign('', '');
  constructor(private signInService: SigninService, private _router:Router, private shared: SharedService, private cartItem : CartitemService) { }

  signInForm() {
    this.subscription = this.signInService.signInUser(this.user).subscribe(
      data => {
        if(data){
          let currUser:Object = {
            isSigned : true,
            userName : data.name,
            useremail: data.email
          }
          this.shared.changeStatus(currUser)
          //this.shared.changeUserName(data.name)
          console.log(JSON.stringify(data))
          localStorage.setItem('isSigned', 'true')
          localStorage.setItem('userid', data.id)
          localStorage.setItem('username', data.name)
          localStorage.setItem('useremail', data.email)
          this.getCartDetails();
          this._router.navigate(['']);
        }
      },
      error => {
        console.log(error)
      })
  }

  getCartDetails() {
    console.log('Get Cart Details')
    let curCart = {
      count : 0,
      idArr : {}
    }
    this.subscription = this.cartItem.getCartDetails(this.user.email).subscribe(cart => {
      curCart.count = cart[0].totalcount
      curCart.idArr = JSON.stringify(cart[0].productids)
      localStorage.cartCount = cart[0].totalcount
      localStorage.cartArr = JSON.stringify(cart[0].productids)
      this.shared.changeCart(curCart)
    })
  }

  ngOnInit() {
    
  }

}
