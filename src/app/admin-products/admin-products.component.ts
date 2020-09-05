import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from './admin-products.service';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: any;
  productForm = new FormGroup({
    productTitle: new FormControl(''),
    productQuantity: new FormControl(''),
    productPrice: new FormControl('')
  });

  isAddActive: string = 'remove_add_active';

  constructor(
    private productService: AdminProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openProductForm() {
    // toggle class
    if(this.isAddActive == 'remove_add_active') {
      this.isAddActive = 'add_add_active';
    } else {
      this.isAddActive = 'remove_add_active';
    }
  }

  onSubmitAddProduct() {
    // Add To Database
  }

}
