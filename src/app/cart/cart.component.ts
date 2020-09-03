import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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

  decQty(product) {
    if(product.quantity > 0) {
      product.quantity--;
    }
  } 

  incQty(product) {
    if(product.quantity < 100) {
      product.quantity++;
    }
  }

}
