import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [TileComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselModule,
    TileComponent
  ]
})
export class GlobalModule { }
