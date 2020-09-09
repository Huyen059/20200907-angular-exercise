import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { SanitizePhonePipe } from './sanitize-phone.pipe';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    SanitizePhonePipe,
    AddFriendComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
