import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:ProductsComponent,title:'Home page | Products '},
  {path:'shopcart',component:CheckOutComponent,title:'Home page | Shop Cart '}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
