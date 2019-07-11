import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ng-starrating';
import { CarouselComponent } from './carousel/carousel.component'
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [TileComponent, CarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RatingModule
  ],
  exports: [
    CarouselModule,
    RatingModule,
    TileComponent,
    CarouselComponent
  ]
})
export class GlobalModule { }
