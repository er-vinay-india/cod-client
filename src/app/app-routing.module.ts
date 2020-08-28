import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: 'product-details', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: 'our-products', component: OurProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'order-page', component: OrderPageComponent },
  { path: 'product-list', component: ProductListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
