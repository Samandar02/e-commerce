import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ApiService,StoreService]
})
export class AppComponent {
  title = 'e-commerce';
}
