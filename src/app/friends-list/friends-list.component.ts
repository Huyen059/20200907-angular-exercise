import { Component, OnInit } from '@angular/core';
import {Friend} from '../friend';
import {FriendsService} from '../friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  allFriends: Friend[];
  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.getAllFriends();
  }

  getAllFriends(): void {
    this.friendsService.getAll()
      .subscribe((friends: Friend[]) => this.allFriends = [...friends]);
  }
}
