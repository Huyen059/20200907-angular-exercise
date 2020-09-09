import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { SanitizePhonePipe } from './sanitize-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    SanitizePhonePipe
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
