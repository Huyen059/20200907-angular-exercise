import { Component, OnInit } from '@angular/core';
import {Friend} from '../friend';
import {FriendsService} from '../friends.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friend('', '', '', '', '');

  constructor(private friendsService: FriendsService, private router: Router) { }

  ngOnInit(): void {
  }

  addFriend(): void {
    this.friendsService.add(this.friendModel)
      .subscribe(() => this.router.navigate(['/friend-list']));
  }

}
