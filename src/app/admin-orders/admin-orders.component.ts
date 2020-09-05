import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from './admin-orders.service';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: any;
  orderForm = new FormGroup({
    orderGuid: new FormControl(''),
    orderPromoApplied: new FormControl(''),
    orderQuantity: new FormControl(''),
    orderTotalPrice: new FormControl(''),
    orderStatus: new FormControl('')
  });

  isAddActive: string = 'remove_add_active';

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


  openOrderForm(orderGuid = '') {

    this.orderForm.patchValue({
      orderGuid: orderGuid
    });

    if (orderGuid != '') {
      this.orderService.getOrderDetails(orderGuid).subscribe(
        (data) => {
          const product = data;

          this.orderForm.patchValue({
            promo_applied: this.orderForm.value.orderPromoApplied,
            order_product: this.orderForm.value.orderQuantity,
            total_price: this.orderForm.value.orderTotalPrice,
            status: this.orderForm.value.orderStatus
          });
        }
      )
    } else {
      this.orderForm.reset();
    }

    // toggle class
    if (this.isAddActive == 'remove_add_active') {
      this.isAddActive = 'add_add_active';
    } else {
      this.isAddActive = 'remove_add_active';
    }
  }

  onSubmitAddOrder() {
    // Add To Database
    let post_data = {
      guid: this.orderForm.value.orderGuid,
      promo_applied: this.orderForm.value.orderTitle,
      order_product: this.orderForm.value.orderQuantity,
      total_price: this.orderForm.value.orderTotalPrice,
      status: this.orderForm.value.orderStatus
    };

    this.orderService.addOrder(post_data).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        //
      },
      () => {
        this.getOrders();
      }
    )
  }

  deleteOrder(orderGuid: any) {
    this.orderService.deleteOrder(orderGuid).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        //
      },
      () => {
        this.getOrders();
      }
    )

  }

}
