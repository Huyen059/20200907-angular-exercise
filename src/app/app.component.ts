import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {FriendsService} from './friends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-name';
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friend('', '', '', '', '');
  searchEmail = '';
  allFriends: Friend[];
  searchFriend: Friend;
  searchFriendError: string;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getAllFriends();
  }

  addFriend(): void {
    this.friendsService.add(this.friendModel)
      .subscribe((friend: Friend) => this.allFriends.push(friend));
  }

  getAllFriends(): void {
    this.friendsService.getAll()
      .subscribe((friends: Friend[]) => this.allFriends = [...friends]);
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

  sanitizePhone(inputNumber: string): string {
    return  inputNumber.replace(/[^+0-9]/g, '');
  }
}

