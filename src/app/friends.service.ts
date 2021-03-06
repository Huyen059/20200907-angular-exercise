import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandlerService} from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  baseUrl = 'http://localhost:9000/';
  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) { }

//  POST
  add(friend: Friend): Observable<Friend>{
    const url = 'addFriend';
    return this.http.post<Friend>(this.baseUrl + url, friend, httpOptions)
      .pipe(
        catchError(this.httpErrorHandler.handleError)
      );
  }

//  GET
  getAll(): Observable<Friend[]>{
    const url = 'allFriends';
    return this.http.get<Friend[]>(this.baseUrl + url, httpOptions)
      .pipe(
        catchError(this.httpErrorHandler.handleError)
      );
  }

  searchByEmail(email): Observable<Friend>{
    const url = 'findFriendByEmail?email=';
    return this.http.get<Friend>(this.baseUrl + url + email, httpOptions)
      .pipe(
        catchError(this.httpErrorHandler.handleError)
      );
  }
}
