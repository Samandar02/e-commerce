import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  stories:any[] = [];
  store = new Subject<any[]>();
  getStore(){
    return this.store.asObservable();
  }
  setValue(products:any[]){
    this.stories.push(products)
    localStorage.setItem('shopcart',JSON.stringify(this.stories));
    this.store.next(this.stories);
  }
}
