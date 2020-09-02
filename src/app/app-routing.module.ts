import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { 
    path: 'order-page',
    canActivate: [AuthGuard],  
    component: OrderPageComponent 
  },
  { path: 'our-products', component: OurProductsComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product/:id', component: ProductComponent },
  { 
    path: 'cart',
    canActivate: [AuthGuard], 
    component: CartComponent 
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
