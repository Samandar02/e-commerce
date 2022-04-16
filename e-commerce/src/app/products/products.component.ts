import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataExchangeService } from '../data-exchange.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private apiSvc: ApiService,
    private dataExc: DataExchangeService
  ) {}
  ngOnInit() {
    this.apiSvc.getProdutcs().subscribe((res) => {
      this.products = res;
    });
  }
  addToCart(product: Product) {
    this.dataExc.nextProduct(product);
  }
}
