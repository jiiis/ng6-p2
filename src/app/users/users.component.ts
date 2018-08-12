import {Component, OnInit} from '@angular/core';

import {listStagger} from '../animations';
import {IUser} from '../interfaces';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  animations: [
    listStagger
  ]
})
export class UsersComponent implements OnInit {
  users$: IUser[];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.getUsers().subscribe((users: IUser[]) => this.users$ = users);
  }
}
