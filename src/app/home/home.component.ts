import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router'
import {DealProductsService} from './../services/deal-products.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dealProducts: any;
  lowCostProducts: any;
  subscription: Subscription;
  public imgUrlExtract(product) {
    let imgArr = []
    imgArr = product.imageurls.split(',')
    for (let i = 0; i < imgArr.length; i++) {
      if (imgArr[i].indexOf('bbystatic') > -1) {
        product.imageurls = imgArr[i]
      }
    }
  }
  onDealClick () {
    this.router.navigate(['/products'], { queryParams: { type: 'dealProducts' } });
  }
  onLowCostClick () {
    this.router.navigate(['/products'], { queryParams: { type: 'lowCostProducts' } });
  }
  constructor(private dealProductsService: DealProductsService, private router:Router, private spinner: NgxSpinnerService ) { 
    this.subscription = this.dealProductsService.getDealProducts().subscribe(deals => {
      this.dealProducts = deals
      this.dealProducts.forEach(product => {
        this.imgUrlExtract(product)
      });
      this.spinner.hide()
    })
    this.subscription = this.dealProductsService.getLowCostProducts().subscribe(lowCost => {
      this.lowCostProducts = lowCost
      this.lowCostProducts.forEach(product => {
        this.imgUrlExtract(product)
      });
      this.spinner.hide()
    })
  }

  ngOnInit() {
    this.spinner.show()
  }

}
