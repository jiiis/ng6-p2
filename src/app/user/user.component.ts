import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Params} from '@angular/router/src/shared';

import {IUser} from '../interfaces';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  userId: string;
  user$: IUser;

  constructor(private _router: Router, private _route: ActivatedRoute, private _data: DataService) {
    this._route.paramMap.subscribe((paramMap: ParamMap) => this.userId = paramMap.get('id'));
  }

  ngOnInit() {
    this._data.getUser(this.userId).subscribe((user: IUser) => this.user$ = user);
  }

  backToUsers() {
    this._router.navigate(['/users', {id: this.userId}]);
  }
}
