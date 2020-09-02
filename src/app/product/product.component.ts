import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(
    private router: Router,
    private active_route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.active_route.paramMap.subscribe(
      params => {
        let productId = params.get('id');
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        this.getProduct(productId);
        window.scrollTo(0, 0);
      });
  }

  getProduct(productId: any) {
    this.configService.getProduct(productId).subscribe(
      (data) => {
        this.product = data;
      });
    }
}
