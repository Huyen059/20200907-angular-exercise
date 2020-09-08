import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-name';
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friend('', '', '', '', '');
  allFriends: any = [];

  constructor(private addFriendService: AddFriendService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllFriends('http://localhost:9000/allFriends');
  }

  addFriend(): void {
    // console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel)
      .subscribe((data: Friend) => {
      this.getAllFriends('http://localhost:9000/allFriends');
    });
  }

  async getAllFriends(url: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return await this.http.get(url, httpOptions).toPromise()
      .then(data => {
        this.allFriends = data;
        // console.log(this.allFriends);
      });
  }
}

