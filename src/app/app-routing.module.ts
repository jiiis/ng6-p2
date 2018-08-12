import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }, {
    path: 'users/:id',
    component: UserComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
