import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subscription: Subscription
  cartProducts: any

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.getCartProducts(JSON.parse(localStorage.getItem('cartArr'))).subscribe(products => {
      this.cartProducts = products
    })
  }

  ngOnInit() {

  }

}
