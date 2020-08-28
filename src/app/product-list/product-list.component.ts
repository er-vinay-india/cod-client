import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: any;
  
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
  