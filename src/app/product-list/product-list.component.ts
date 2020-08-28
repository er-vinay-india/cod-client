import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];

  productListForm = new FormGroup({
    product_name: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.products.push({ 
      name: this.productListForm.value.product_name
    });

    this.productListForm.value.product_name = '';
  }

}
