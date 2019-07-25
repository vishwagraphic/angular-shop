import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service'
import { SharedService } from './../services/shared.service'
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'

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

  constructor(private productsService: ProductsService, private shared: SharedService, 
    private route: ActivatedRoute, private spinner:NgxSpinnerService) {
    this.route.queryParams.subscribe(params => {
      this.type = params.type
    })
    this.getProducts()
  }

  getProducts () {
    this.subscription = this.productsService.getProducts(this.type).subscribe(products => {
      let productsitem:any = products
      let filteredResponse = productsitem.filter((product:any) => {
        if (product.type === undefined) {
          return product
        } else {
          this.title = product.type
        }
      })
      filteredResponse.forEach((product:any) => {
        this.shared.imgUrlExtract(product)
      });
      this.products = filteredResponse
      this.spinner.hide()
      
    })
  }

  ngOnInit() {
    this.spinner.show()
  }

}
