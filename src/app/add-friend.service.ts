import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:9000/addFriend';
  constructor(private http: HttpClient) {}

  addFriend(friend: Friend): Observable<any> {
    return this.http.post(this.url, friend);
  }
}
