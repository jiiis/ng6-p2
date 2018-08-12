import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {UserComponent} from './user/user.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
