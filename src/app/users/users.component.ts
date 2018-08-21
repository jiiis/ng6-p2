import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
  userIdSelected: number;

  constructor(private _route: ActivatedRoute, private _data: DataService) {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const paramId = parseInt(paramMap.get('id'), 10);

      if (!isNaN(paramId)) {
        this.userIdSelected = paramId;
      }
    });
  }

  ngOnInit() {
    this._data.getUsers().subscribe((users: IUser[]) => this.users$ = users);
  }

  isUserSelected(user: IUser): boolean {
    return user.id === this.userIdSelected;
  }
}
