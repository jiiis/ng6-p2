import {Component, OnInit} from '@angular/core';

import {IUser} from '../interfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-address',
  template: `
    <p>{{ user | json }}</p>
  `,
  styles: []
})
export class UserAddressComponent implements OnInit {
  user: IUser;

  constructor(_userService: UserService) {
    _userService.user$.subscribe((user: IUser) => this.user = user);
  }

  ngOnInit() {}
}
