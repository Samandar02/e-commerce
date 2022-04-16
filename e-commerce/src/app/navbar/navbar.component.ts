import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from '../data-exchange.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  myProductCount: number = 0;
  products: Product[] = [];
  constructor(private dataExcSvc: DataExchangeService) {}

  ngOnInit() {
    this.dataExcSvc.getProduct().subscribe((res) => {
      this.products.push(res);
      localStorage.setItem('products', JSON.stringify(this.products));
      this.myProductCount = this.products.length;
    });
  }
}
