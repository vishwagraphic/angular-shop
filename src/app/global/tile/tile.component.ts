import { Component, Input, OnInit } from '@angular/core';
import {CartitemService} from './../../services/cartitem.service'
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service'

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() product: any;
  subscription: Subscription;
  email: string
  idArr : object
  constructor (private cartItem:CartitemService, private shared: SharedService) {}

  onAddToCart(curcount:any, id:any) {
    this.shared.currCart.subscribe(cart => this.idArr = cart.idArr)
    let dcount = this.idArr || {}
    let totalqty = curcount + dcount[id]
    if (totalqty !== 0) {
      dcount[id] = (dcount[id] || 0) + curcount
    } else {
      delete dcount[id]
    }
    localStorage.setItem('cartCount', Number(localStorage.getItem('cartCount')) + curcount)
    localStorage.setItem('cartArr', JSON.stringify(dcount))
    console.log(localStorage.getItem('cartCount'))
    //this.updateCart(count, dcount)
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
      console.log(JSON.stringify(curuser))
      if(data === 0){
        this.subscription = this.cartItem.postCart(curuser).subscribe(data => {
          console.log(data)
        })
      }
    })
  }
  ngOnInit(){}
}
