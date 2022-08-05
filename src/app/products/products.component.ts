import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private apiSvc:ApiService) { }
  products:any[] = [];
  ngOnInit(): void {
    this.apiSvc.get().subscribe(res=>{
      this.products = <any[]>res;
    })
  }

}
