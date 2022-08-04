import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly URL = 'https://fakestoreapi.com/products';
  constructor() { }
}
