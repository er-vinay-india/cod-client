import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../environments/environment';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  setAuthInfo(data) {
    if(typeof data['user'] === 'object') {
      let userString = JSON.stringify(data['user']);
      localStorage.setItem('loggedInUser', userString);
    }

    if(typeof data['access_token'] === 'string') {
      localStorage.setItem('authToken', data['access_token']);
    }

    if(typeof data['user_guid'] === 'string') {
      localStorage.setItem('userGuid', data['user_guid']);
    }

    localStorage.setItem('isLoggedIn', 'true');
          
    if((typeof data['user'].is_admin === 'boolean') && data['user'].is_admin) {
      localStorage.setItem('isAdmin', 'true');
    }

    return true;
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  removeAuthInfo() {
    return this.http.post(environment.apiUrl + 'logout', {}).pipe(
      catchError(this.handleError)
    );
  }
  
  removeAuthInfoLocal() {
    window.localStorage.removeItem('loggedInUser');
    window.localStorage.removeItem('authToken');
    window.localStorage.removeItem('isAdmin');
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('userGuid');
    window.location.reload(true);
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
