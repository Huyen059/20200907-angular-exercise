import { Component } from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-name';
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friend('', '', '', '', '');
  constructor(private addFriendService: AddFriendService) {}

// tslint:disable-next-line:typedef
  addFriend() {
    // console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel)
      .subscribe((data: Friend) => {
      console.log(data);
    });
  }
}

