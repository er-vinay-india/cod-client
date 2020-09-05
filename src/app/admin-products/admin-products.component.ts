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
    productGuid: new FormControl(''),
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

  openProductForm(productGuid = '') {

    this.productForm.patchValue({
      productGuid: productGuid
    });

    if(productGuid != '') {
      this.productService.getProductDetails(productGuid).subscribe(
        (data) => {
          const product = data;
          
          this.productForm.patchValue({
            productTitle: product['result'].product.title,
            productPrice: product['result'].product.price,
            productQuantity: product['result'].product.quantity
          });
        }
      )
    } else {
      this.productForm.reset();
    }

    // toggle class
    if(this.isAddActive == 'remove_add_active') {
      this.isAddActive = 'add_add_active';
    } else {
      this.isAddActive = 'remove_add_active';
    }
  }

  onSubmitAddProduct() {
    // Add To Database
    let post_data = {
      guid: this.productForm.value.productGuid,
      title: this.productForm.value.productTitle,
      quantity: this.productForm.value.productQuantity,
      price: this.productForm.value.productPrice
    };

    this.productService.addProduct(post_data).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        //
      },
      () => {
        this.getProducts();
      }
    )
  }

  deleteProduct(productGuid: any) {
    this.productService.deleteProduct(productGuid).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        //
      },
      () => {
        this.getProducts();
      }
    )

  }

}
