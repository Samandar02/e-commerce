import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(private store:StoreService) { }
  items:any[] = [];
  amount = 0;
  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('shopcart')??'')
    this.checkAmount();
  }
  checkAmount(){
    this.items.forEach(item=>{
      this.amount+=item.price;
    })
  }


}
