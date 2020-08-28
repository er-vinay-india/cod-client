import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: string;
products = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(){
    this.products.push({name: this.product});
  this.product = '';
}

}
