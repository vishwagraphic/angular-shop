import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
import { CartitemService } from './services/cartitem.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shop';
  email: string;
  subscription: Subscription;
  
  cart= {

  }
  

  constructor(private shared: SharedService, private cartitemService:CartitemService) {
    
  }

  getCartItems () {
    let curCart = {
      count : 0,
      idArr : {}
    }
    this.subscription = this.cartitemService.getCartDetails(this.email).subscribe(cart => {
      curCart.count = cart[0].totalcount
      curCart.idArr = JSON.stringify(cart[0].productids)
      localStorage.cartCount = cart[0].totalcount
      localStorage.cartArr = JSON.stringify(cart[0].productids)
      
      this.shared.changeCart(curCart)
    })
  }

  ngOnInit() {
    this.shared.currentUser.subscribe(status => this.email = status.useremail)
    //this.getCartItems()
  }
}
