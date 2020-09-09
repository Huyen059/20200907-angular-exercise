import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
// import {AddFriendService} from './add-friend.service';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
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
  searchTerm = '';
  allFriends: any = [];
  searchFriend: object;

  constructor(private friendsService: FriendsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllFriends('http://localhost:9000/allFriends');
  }

  addFriend(): void {
    this.friendsService.addFriend(this.friendModel)
      .subscribe(() => {
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
      });
  }

  async searchFriendByEmail(): Promise<any> {
    const url = 'http://localhost:9000/findFriend?email=' + this.searchTerm;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return await this.http.get(url, httpOptions).toPromise().then(friend => {
      this.searchFriend = friend;
      console.log(friend);
    });
  }

  sanitizePhone(inputNumber: string): string {
    return  inputNumber.replace(/[^+0-9]/g, '');
  }
}

