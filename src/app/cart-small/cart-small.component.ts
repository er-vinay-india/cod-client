import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './../cart-service.service';

@Component({
  selector: 'app-cart-small',
  templateUrl: './cart-small.component.html',
  styleUrls: ['./cart-small.component.css']
})
export class CartSmallComponent implements OnInit {

  products: any;

  constructor(
    private cartServiceService: CartServiceService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.cartServiceService.getCart();
  }

}
