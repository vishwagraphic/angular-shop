import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { CartitemService } from '../services/cartitem.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subscription: Subscription
  cartProducts: any
  qty:number
  email: string;
  idArr:any;

  constructor(private cartService: CartService, private shared: SharedService, private cartItem: CartitemService) {
    this.shared.currCart.subscribe(cart => this.idArr = cart.idArr)
    console.log('IDARRR ' + JSON.stringify(this.idArr))
    this.subscription = this.cartService.getCartProducts(JSON.parse(localStorage.getItem('cartArr'))).subscribe(products => {
      let response:any = products
      response.forEach((product:any) => {
        this.shared.imgUrlExtract(product)
        this.qty = product.quantity
      });
      this.cartProducts = response
    })
  }

  onChange (event) {
    let updateCount = event.target.value - this.qty
    //console.log(updateCount + ' '  + event.target.id)
    let id = event.target.id
    this.cartUpdate(Number(updateCount), id)
    this.qty = event.target.value
  }

  cartUpdate(curcount:any, id:any) {
    let dcount:any;
    dcount = JSON.parse(this.idArr) || {}
    let totalqty = parseInt(curcount) + parseInt(dcount[id])
    if (totalqty !== 0) {
      dcount[id] = (dcount[id] || 0) + curcount
    } else {
      delete dcount[id]
    }
    localStorage.setItem('cartCount', Number(localStorage.getItem('cartCount')) + curcount)
    localStorage.setItem('cartArr', JSON.stringify(dcount))
    let dcounts = JSON.stringify(dcount)
    this.shared.currentUser.subscribe(user => this.email = user.useremail)
    let curuser:any = {
      email: this.email,
      productids: dcounts,
      count: localStorage.getItem('cartCount')
    }
    let curCart:any = {
      count: localStorage.getItem('cartCount'),
      idArr: dcounts
    }
    this.shared.changeCart(curCart)
    this.subscription = this.cartItem.updateCart(curuser).subscribe(data => {
      if(data === 0){
        this.subscription = this.cartItem.postCart(curuser).subscribe(data => {
          console.log(data)
        })
      }
    })
  }

  

  ngOnInit() {

  }

}
