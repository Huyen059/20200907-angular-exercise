import { Component, OnInit } from '@angular/core';
import {Friend} from '../friend';
import {FriendsService} from '../friends.service';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css']
})
export class SearchFriendComponent implements OnInit {
  searchEmail = '';
  searchFriend: Friend;
  searchFriendError: string;

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
  }

  searchFriendByEmail(): void {
    this.searchFriend = null;
    this.searchFriendError = null;
    this.friendsService.searchByEmail(this.searchEmail)
      .subscribe(
        (friend: Friend) => this.searchFriend = friend,
        error => this.searchFriendError = error
      );
  }
}
