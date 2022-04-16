import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { ApiService } from './api.service';
import { DataExchangeService } from './data-exchange.service';
import { Product } from './models/product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService,DataExchangeService],
})
export class AppComponent {
 
}
