import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from './../cart-service.service';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-product-right',
  templateUrl: './product-right.component.html',
  styleUrls: ['./product-right.component.css']
})
export class ProductRightComponent implements OnInit {

  @Input() item: any;

  constructor(
    private cartServiceService: CartServiceService
  ) { }

  ngOnInit(): void {
  }

  addToCart() {
    let post_data = {
      title: this.item.result.product.title,
      price: this.item.result.product.price,
      quantity: this.item.result.product.quantity,
      guid: this.item.result.product.guid
    }
    this.cartServiceService.addToCart(post_data);
  }

}
