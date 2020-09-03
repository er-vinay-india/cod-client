import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductLeftComponent } from './product-left/product-left.component';
import { ProductRightComponent } from './product-right/product-right.component';
import { HomeComponent } from './home/home.component';
import { CarouselBoxComponent } from './carousel-box/carousel-box.component';
import { AccordianBoxComponent } from './accordian-box/accordian-box.component';
import { UpcomingBoxComponent } from './upcoming-box/upcoming-box.component';
import { NewsletterBoxComponent } from './newsletter-box/newsletter-box.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OtherFooterComponent } from './other-footer/other-footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeftBoxComponent } from './left-box/left-box.component';
import { RightBoxComponent } from './right-box/right-box.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSmallComponent } from './cart-small/cart-small.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { CompanyNavComponent } from './company-nav/company-nav.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductLeftComponent,
    ProductRightComponent,
    HomeComponent,
    CarouselBoxComponent,
    AccordianBoxComponent,
    UpcomingBoxComponent,
    NewsletterBoxComponent,
    ProductBoxComponent,
    OurProductsComponent,
    OrderPageComponent,
    OtherFooterComponent,
    SignupComponent,
    SigninComponent,
    ProductListComponent,
    CartComponent,
    PageNotFoundComponent,
    LeftBoxComponent,
    RightBoxComponent,
    CheckoutComponent,
    CartSmallComponent,
    OrderSuccessComponent,
    FaqComponent,
    AboutUsComponent,
    OurMissionComponent,
    CompanyNavComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxImageZoomModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
