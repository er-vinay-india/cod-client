import { Component, OnInit } from '@angular/core';
import { OrderService} from './order.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  orders: any;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().pipe(first()).subscribe((data) => {
      this.orders = data;
    });
  }

}
