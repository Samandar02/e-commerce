import { Component, OnInit } from '@angular/core';
import { Product, ShopCartViewModel } from '../models/product';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})
export class ShopCartComponent implements OnInit {
  constructor() {}
  products: ShopCartViewModel[] = [];
  totalPrice = 0;
  ngOnInit() {
    this.products = <ShopCartViewModel[]>(
      JSON.parse(localStorage.getItem('products'))
    );
    this.products.forEach((item) => (item.count = 1));
  }
  deleteItem(id: number) {
    let index = this.products.findIndex((item) => item.id == id);
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  addOrSubstract(product: ShopCartViewModel, option: '+' | '-') {
    if (product.count <= 0) product.count = 1;
    if (option == '+') product.count++;
    else product.count--;
    this.calculate();
  }
  calculate() {
    this.totalPrice = 0;
    this.products
      .map((item) => item.count * item.price)
      .forEach((price) => {
        this.totalPrice += price;
      });
  }
  submit() {}
}
