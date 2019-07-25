import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GlobalModule } from '../global/global.module';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [HomeComponent ],
  imports: [
    CommonModule,
    GlobalModule,
    CarouselModule,
    NgxSpinnerModule
  ],
  exports : [HomeComponent, GlobalModule, CarouselModule]
})
export class HomeModule { }
