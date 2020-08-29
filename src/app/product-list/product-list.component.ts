import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: any;
    
    productFilterForm = new FormGroup({
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productGuid: new FormControl('')
    });
  
    constructor(private configService: ConfigService) { }
  
    ngOnInit(): void {
      this.getUpcomingProducts();
    }
  
    getUpcomingProducts() {
      this.configService.getUpcomingProducts()
      .subscribe(
        (data) => {
          this.products = data;
        }
      );
    }
  }
  