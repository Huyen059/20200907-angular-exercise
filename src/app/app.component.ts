import {Component} from '@angular/core';
import {Friend} from './friend';
import {FriendsService} from './friends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchEmail = '';
  searchFriend: Friend;
  searchFriendError: string;

  constructor(private friendsService: FriendsService) {}

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

