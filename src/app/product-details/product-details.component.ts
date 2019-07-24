import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from './../services/product-detail.service'
import { Subscription } from 'rxjs';
import { SharedService } from './../services/shared.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  subscription:Subscription
  product: any
  id:any

  constructor(private productDetailService: ProductDetailService, private router:Router, private shared: SharedService ) { 
    
  }
  getProduct (shared:any, id:any) {
    this.subscription = this.productDetailService.getProductDetails(id).subscribe(data => {
      this.product = data[0]
      console.log(JSON.stringify(this.product))
      //this.product.forEach(prod => {
        shared.imgUrlExtract(this.product)
        this.product.freeShipping = `${this.addDays(new Date(), 4)} - ${this.addDays(new Date(), 8)}`
        this.product.paidShipping = `${this.addDays(new Date(), 2)}`
      //});
    })
  }

  addDays (date, days) {
    let result:any = new Date(date)
    result.setDate(result.getDate() + days)
    result = result.toDateString()
    return result
  }
      

  ngOnInit() {
    let url = this.router.url
    this.id = url.substring(url.lastIndexOf('/') + 1)
    this.getProduct(this.shared, this.id)
  }

}
