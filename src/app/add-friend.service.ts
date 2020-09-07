import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:9000/addFriend';
  constructor(public http: HttpClient) {}
  // tslint:disable-next-line:typedef
  addFriend(friend: Friend) {
    return this.http.post(this.url, friend);
  }
}
