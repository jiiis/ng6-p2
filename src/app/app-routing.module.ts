import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {UserAddressComponent} from './user-address/user-address.component';
import {UserCompanyComponent} from './user-company/user-company.component';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserComponent,
    children: [
      {
        path: 'address',
        component: UserAddressComponent
      },
      {
        path: 'company',
        component: UserCompanyComponent
      }
    ]
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  UsersComponent,
  UserComponent,
  UserAddressComponent,
  UserCompanyComponent,
  PostsComponent
];
