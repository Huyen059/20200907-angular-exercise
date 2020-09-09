import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() { }

  // https://angular.io/guide/http
  // Two types of errors can occur.
  //
  // The server backend might reject the request, returning an HTTP response with
  // a status code such as 404 or 500. These are error responses.
  //
  // Something could go wrong on the client-side such as a network error that prevents
  // the request from completing successfully or an exception thrown in an RxJS operator.
  // These errors produce JavaScript ErrorEvent objects.
  //
  // HttpClient captures both kinds of errors in its HttpErrorResponse.
  // You can inspect that response to identify the error's cause.

  handleError(error: HttpErrorResponse): Observable<never>{
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
