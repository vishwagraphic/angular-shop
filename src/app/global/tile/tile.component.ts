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
  constructor (private cartItem:CartitemService, private shared: SharedService) {}

  onAddToCart(curcount:number, id:any) {
    let dcount = localStorage.idArr || {}
    let totalqty = curcount + dcount[id]
    if (totalqty !== 0) {
      dcount[id] = (dcount[id] || 0) + curcount
    } else {
      delete dcount[id]
    }
    localStorage.setItem('cartCount', localStorage.count || 0 + curcount)
    localStorage.setItem('cartArr', JSON.stringify(dcount))
    //this.updateCart(count, dcount)
    let dcounts = JSON.stringify(dcount)
    this.shared.currentUser.subscribe(user => this.email = user.email)
    let curuser:any = {
      email: this.email,
      productids: dcounts,
      count: curcount
    }
    let curCart:any = {
      count: curcount,
      idArr: dcount
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
