import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendsListComponent} from './friends-list/friends-list.component';
import {AddFriendComponent} from './add-friend/add-friend.component';

const routes: Routes = [
  { path: 'friend-list', component: FriendsListComponent },
  { path: 'add-friend', component: AddFriendComponent },
  { path: '',   redirectTo: '/friend-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
