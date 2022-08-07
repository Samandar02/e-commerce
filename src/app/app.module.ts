import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DetailComponent } from './products/detail/detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatigoriesComponent,
    ProductsComponent,
    CheckOutComponent,
    DetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
