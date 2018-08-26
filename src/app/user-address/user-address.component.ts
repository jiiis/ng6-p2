import {Component, OnInit} from '@angular/core';

import {IUser} from '../interfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-address',
  template: `
    <form novalidate #form="ngForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          required
          #nameInput
          #name="ngModel"
          [class.is-invalid]="name.invalid && name.touched"
          [(ngModel)]="user.name">
        <small [class.is-hidden]="name.valid || name.untouched">Name is required.</small>
      </div>
      <div>
        <label for="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          required
          pattern="^\d{10}$"
          #phoneInput
          #phone="ngModel"
          [class.is-invalid]="phone.invalid && phone.touched"
          [(ngModel)]="user.phone">
        <div *ngIf="phone.errors && phone.touched">
          <small *ngIf="phone.errors.required">Phone number is required.</small>
          <small *ngIf="phone.errors.pattern">Phone number must be 10 digits.</small>
        </div>
      </div>
      <button type="submit">Submit form</button>
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

  onSubmit() {
    console.log(111111, this.user);
  }
}
