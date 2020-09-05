import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent, data: {animation: 'Signup'} },
  { path: 'signin', component: SigninComponent, data: {animation: 'Signin'} },
  { 
    path: 'admin-orders',
    canActivate: [AuthGuard],  
    component: AdminOrdersComponent, 
    data: { animation: 'AdminOrders' } 
  },
  { 
    path: 'checkout',
    canActivate: [AuthGuard],  
    component: CheckoutComponent, 
    data: {animation: 'Checkout'} 
  },
  { 
    path: 'order-success',
    canActivate: [AuthGuard],  
    component: OrderSuccessComponent, 
    data: {animation: 'OrderSuccess'}
  },
  { path: 'admin-products', component: AdminProductsComponent, data: {animation: 'AdminProduct'} },
  { path: 'product-list', component: ProductListComponent, data: {animation: 'ProductList'} },
  { path: 'product/:id', component: ProductComponent, data: {animation: 'Product'} },
  { 
    path: 'cart',
    canActivate: [AuthGuard], 
    component: CartComponent, 
    data: {animation: 'Cart'} 
  },
  { path: 'our-mission', component: OurMissionComponent, data: {animation: 'OurMission'} },
  { path: 'faq', component: FaqComponent, data: {animation: 'Faq'} },
  { path: 'about-us', component: AboutUsComponent, data: {animation: 'AboutUs'} },
  { path: '', component: HomeComponent, data: {animation: 'HomePage' } },
  { path: '**', component: PageNotFoundComponent, data: {animation: 'PageNotFound'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
