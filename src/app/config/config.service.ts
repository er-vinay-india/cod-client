import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn');
  }

  isAdmin() {
    return localStorage.getItem('isAdmin');
  }

  // Register User
  registerUser(post_data: any) {
    return this.http.post(environment.apiUrl + 'registration', post_data).pipe(
      catchError(this.handleError)
    );
  }

  // Login User
  loginUser(post_data: any) {
    return this.http.post(environment.apiUrl + 'login', post_data).pipe(
      catchError(this.handleError)
    );
  }

  // Logout User
  logoutUser() {
    let post_data = [];
    return this.http.post(environment.apiUrl + 'logout', post_data).pipe(
      catchError(this.handleError)
    );
  }




  getUserDetails() {
    return this.http.get(environment.apiUrl + 'user/all')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getUpcomingProducts() {
    return this.http.get(environment.apiUrl + 'product/all')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getProducts() {
    return this.http.get(environment.apiUrl + 'product/all')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getProduct(productId) {
    return this.http.get(environment.apiUrl + 'product/single/' + productId)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  addUser(post_data: any) {
    return this.http.post(environment.apiUrl + 'user', post_data).pipe(
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
