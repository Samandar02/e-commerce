import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './models/product';

@Injectable()
export class DataExchangeService {

  constructor() { }
  private dataExchangeReop = new Subject<Product>();
  public nextProduct(product:Product){
    this.dataExchangeReop.next(product);
  }
  public getProduct(){
    return this.dataExchangeReop.asObservable();
  }
}