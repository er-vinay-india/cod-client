import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftAreaComponent } from './left-area/left-area.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { ProductComponent } from './product/product.component';
import { ProductLeftComponent } from './product-left/product-left.component';
import { ProductRightComponent } from './product-right/product-right.component';
import { HomeComponent } from './home/home.component';
import { CarouselBoxComponent } from './carousel-box/carousel-box.component';
import { AccordianBoxComponent } from './accordian-box/accordian-box.component';
import { LeftBoxComponent } from './left-box/left-box.component';
import { RightBoxComponent } from './right-box/right-box.component';
import { UpcomingBoxComponent } from './upcoming-box/upcoming-box.component';
import { NewsletterBoxComponent } from './newsletter-box/newsletter-box.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OtherFooterComponent } from './other-footer/other-footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftAreaComponent,
    MainAreaComponent,
    ProductComponent,
    ProductLeftComponent,
    ProductRightComponent,
    HomeComponent,
    CarouselBoxComponent,
    AccordianBoxComponent,
    LeftBoxComponent,
    RightBoxComponent,
    UpcomingBoxComponent,
    NewsletterBoxComponent,
    ProductBoxComponent,
    OurProductsComponent,
    OrderPageComponent,
    OtherFooterComponent,
    SignupComponent,
    //SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
