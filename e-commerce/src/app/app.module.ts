import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './api.service';
import { DataExchangeService } from './data-exchange.service';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopcart', component: ShopCartComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ShopCartComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, DataExchangeService]
})
export class AppModule {}
