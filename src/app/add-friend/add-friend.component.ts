import { Component, OnInit } from '@angular/core';
import {Friend} from '../friend';
import {FriendsService} from '../friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friend('', '', '', '', '');

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
  }

  addFriend(): void {
    this.friendsService.add(this.friendModel)
      .subscribe();
  }

}
