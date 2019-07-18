import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service'
import { SharedService } from './../services/shared.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  subscription: Subscription
  products: any
  type: ''
  title: ''

  constructor(private productsService: ProductsService, private shared: SharedService) {
    this.subscription = this.productsService.getProducts(this.type).subscribe(products => {
      this.products = products
      this.products.forEach((product:any, index) => {
        if(index !== 0){
          this.shared.imgUrlExtract(product)
        }else{
        }
      });
    })
  }

  ngOnInit() {
  }

}
