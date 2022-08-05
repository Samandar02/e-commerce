import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( protected store:StoreService,private router:Router) { }
  shopCartCount = 0;
  ngOnInit(): void {
    this.store.getStore().subscribe(res=>{
      this.shopCartCount++;
    })
  }
  onChange(value:string){
    this.router.navigate(['.'],{queryParams:{
      s:value
    }})
  }
}
