import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [TopNavComponent, BottomNavComponent],
  imports: [
    CommonModule
  ],
  exports: [
            TopNavComponent,
            BottomNavComponent
          ]
})
export class NavModule { }
