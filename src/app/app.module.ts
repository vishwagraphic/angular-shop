import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavModule } from './nav/nav.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { SigninModule } from './signin/signin.module';
import { RegisterModule } from './register/register.module';
import {AboutComponent} from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    CartComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    SigninModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
