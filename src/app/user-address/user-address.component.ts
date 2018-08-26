import {Component, OnInit} from '@angular/core';

import {IUser} from '../interfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-address',
  template: `
    <form #form="ngForm">
      <input
        type="text"
        name="name"
        required
        #nameInput
        #name="ngModel"
        [class.is-invalid]="name.invalid && name.touched"
        [(ngModel)]="user.name">
      <input
        type="tel"
        name="phone"
        required
        pattern="^\d{3}$"
        #phoneInput
        #phone="ngModel"
        [class.is-invalid]="phone.invalid && phone.touched"
        [(ngModel)]="user.phone">
      <hr>
      {{ nameInput.className }}
      {{ phoneInput.className }}
      {{ name.valid }}
      {{ phone.valid }}
    </form>
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
