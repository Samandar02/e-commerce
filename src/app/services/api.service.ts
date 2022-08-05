import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URL = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get(this.URL);
  }

}
