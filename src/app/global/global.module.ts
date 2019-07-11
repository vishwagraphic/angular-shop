import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component'
import { TileComponent } from './tile/tile.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [TileComponent, CarouselComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselModule,
    TileComponent,
    CarouselComponent
  ]
})
export class GlobalModule { }
