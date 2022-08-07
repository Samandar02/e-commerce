import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShopCart } from '../models';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
    this.stories = JSON.parse(localStorage.getItem('shopcart') ?? '[]')
  }
  stories: any[] = [];
  store = new Subject<any[]>();
  getStore() {
    return this.store.asObservable();
  }
  setValue(product: any[]) {
    if (!this.stories.includes(product)) { 
      this.stories.push(product)
      localStorage.setItem('shopcart', JSON.stringify(this.stories));
    }
    this.store.next(this.stories);

  }
}
