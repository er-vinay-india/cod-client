import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() {
    /* let cartArray = Array();   
    let cartString = JSON.stringify(cartArray);
    localStorage.setItem('_user_cart_', cartString); */
   }

  // Register User
  addToCart(post_data: any) {

    let cartString = localStorage.getItem('_user_cart_');
    let cartArray = JSON.parse(cartString);

    cartArray.push(post_data);
    cartString = JSON.stringify(cartArray);

    localStorage.setItem('_user_cart_', cartString);
  }

  getCart() {
    let cartString = localStorage.getItem('_user_cart_');
    let cartArray = JSON.parse(cartString);
    return cartArray;
  }

  getCartCount() {
    let cartString = localStorage.getItem('_user_cart_');
    let cartArray = JSON.parse(cartString);
    return cartArray.length;
  }

  removeFromCart(post_data: any) {
    let cartString = localStorage.getItem('_user_cart_');
    let cartArray = JSON.parse(cartString);

    for(var i=0; i<cartArray.length; i++) {
      cartArray[i].guid = post_data.guid
      // remove item
    }
  }
}
