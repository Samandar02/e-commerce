import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private apiSvc: ApiService, private route: ActivatedRoute,private store:StoreService) { }
  products: any[] = [];
  filterBy: string = 'all';
  searchBy: string = 'all';
  ngOnInit(): void {
    this.apiSvc.get().subscribe(res => {
      this.products = <any[]>res;
    })
    this.route.queryParamMap.subscribe(res => {
      this.filterBy = res.get('catigorie') ?? 'all'
      this.searchBy = res.get('s') ?? 'all'
    })
  }
  addToCard(product:any[]){
    this.store.setValue(product);
  }

}
