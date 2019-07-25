import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartitemService } from '../services/cartitem.service'
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subscription: Subscription
  cartProducts: object
  qty:number
  email: string;
  idArr:any;

  constructor(private cartService: CartService, private shared: SharedService, private cartItem: CartitemService,
              private spinner: NgxSpinnerService) {
    this.shared.currCart.subscribe(cart => this.idArr = cart.idArr)
    this.subscription = this.cartService.getCartProducts(JSON.parse(localStorage.getItem('cartArr'))).subscribe(products => {
      let response:any = products
      response.forEach((product:any) => {
        this.shared.imgUrlExtract(product)
        this.qty = product.quantity
      });
      this.cartProducts = response
      this.spinner.hide()
    })
  }

  onChange (event:any) {
    this.onEvent(event, event.target.value)
  }
  onDelete (event:any) {
    this.onEvent(event, Number(0))
    let target = event.target
    target.parentNode.parentNode.parentNode.remove()
  }
  onEvent (event:any, value:number) {
    let oldvalue:any
    let idArr = JSON.parse(this.idArr)
    if (event.target.id in JSON.parse(this.idArr)){
      oldvalue = idArr[event.target.id]
    }
    let updateCount = value - oldvalue
    let id = event.target.id
    this.cartUpdate(Number(updateCount), id)
  }

  cartUpdate(curcount:any, id:any) {
    
    let dcount:object = JSON.parse(this.idArr) || {}
    let totalqty = curcount + dcount[id]
    console.log(typeof(dcount) + ' '+ typeof(this.idArr))
    if (totalqty !== 0) {
      dcount[id] = (dcount[id] || 0) + curcount
      //dcount = Object.assign({}, dcount)
    } else {
      delete dcount[id]
    }
    localStorage.setItem('cartCount', Number(localStorage.getItem('cartCount')) + curcount)
    localStorage.setItem('cartArr', JSON.stringify(dcount))
    console.log(localStorage.getItem('cartCount'))
    //this.updateCart(count, dcount)
    let dcounts = JSON.stringify(dcount)
    this.shared.currentUser.subscribe(user => this.email = user.useremail)
    let curuser:object = {
      email: this.email,
      productids: dcounts,
      count: localStorage.getItem('cartCount')
    }
    let curCart:object = {
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
    this.spinner.show()
  }

}
