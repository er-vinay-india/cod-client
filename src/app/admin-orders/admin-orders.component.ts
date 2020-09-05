import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from './admin-orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: any;

  constructor(
    private orderService: AdminOrdersService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

}
