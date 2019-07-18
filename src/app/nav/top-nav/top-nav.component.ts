import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isSigned: boolean;
  userName: String;
  count: Number;
  useremail:string
  idArr : object

  constructor(private shared: SharedService) { }

  onSignout(event) {
    event.preventDefault();
    let currUser:Object = {
      isSigned : false,
      userName : '',
      useremail: '',
    }
    let currCart:Object = {
      count: 0,
      idArr: {}
    }
    this.shared.changeStatus(currUser)
    this.shared.changeCart(currCart)
    localStorage.clear()
  }
  ngOnInit() {
    this.shared.currentUser.subscribe(user => 
      {
        this.isSigned = user.isSigned,
        this.userName = user.userName
        this.useremail = user.useremail
      }
    )
    this.shared.currCart.subscribe(cart => {
      this.count = cart.count,
      this.idArr = cart.idArr
    })
  }
}
