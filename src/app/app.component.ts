import { Component } from '@angular/core';
import {Friend} from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-name';
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friend('', '', '', '', '');
  // tslint:disable-next-line:typedef
  addFriend() {
    console.log(this.friendModel);
  }
}

