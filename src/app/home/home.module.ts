import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from '../global/carousel/carousel.component';
import { TileComponent } from '../global/tile/tile.component'
@NgModule({
  declarations: [HomeComponent, CarouselComponent, TileComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports : [HomeComponent, CarouselComponent, TileComponent]
})
export class HomeModule { }
