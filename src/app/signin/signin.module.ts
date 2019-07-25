import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import {NgxSpinnerModule} from 'ngx-spinner'

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class SigninModule { }
