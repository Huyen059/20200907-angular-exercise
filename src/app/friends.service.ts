import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';

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
    private http: HttpClient
  ) { }

//  POST
  addFriend(friend: Friend): Observable<Friend>{
    const url = 'addFriend';
    return this.http.post<Friend>(this.baseUrl + url, friend, httpOptions);
  }
}
