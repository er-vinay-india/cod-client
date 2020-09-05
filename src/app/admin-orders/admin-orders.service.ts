import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(environment.apiUrl + 'order/all')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getOrderDetails(orderId) {
    return this.http.get(environment.apiUrl + 'order/single/' + orderId)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  addOrder(post_data: any) {
    return this.http.post(environment.apiUrl + 'order', post_data).pipe(
      catchError(this.handleError)
    );
  }

  deleteOrder(guid: any) {
    return this.http.delete(environment.apiUrl + 'order/' + guid).pipe(
      catchError(this.handleError)
    );
  }

  // OrderAdmin Products
  addAdminOrders(post_data: any) {
    return this.http.post(environment.apiUrl + 'admin-orders', post_data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
