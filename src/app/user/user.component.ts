import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {IUser} from '../interfaces';
import {DataService} from '../data.service';
import {UserService} from '../user.service';

@Component({
  providers: [UserService],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  userId: string;
  user: IUser;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private _userService: UserService
  ) {
    this._route.paramMap.subscribe((paramMap: ParamMap) => this.userId = paramMap.get('id'));
  }

  ngOnInit() {
    this._dataService.getUser(this.userId).subscribe((user: IUser) => {
      this.user = user;
      this._userService.setUser(user);
    });
  }

  backToUsers() {
    // Absolute navigation.
    // this._router.navigate(['/users', {id: this.userId}]);

    // Relative navigation.
    this._router.navigate(['../', {id: this.userId}], {relativeTo: this._route});
  }

  goToAddress() {
    this._router.navigate(['address'], {relativeTo: this._route});
  }

  goToCompany() {
    this._router.navigate(['company'], {relativeTo: this._route});
  }
}
