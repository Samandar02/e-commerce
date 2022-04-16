import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable()
export class ApiService {
  url = "https://fakestoreapi.com/products/";
  constructor(private http:HttpClient) { }
  getProdutcs():Observable<Product[]>{
    return <Observable<Product[]>>this.http.get(this.url);
  }
}