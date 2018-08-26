import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IUser} from './interfaces';
import {filter} from 'rxjs/internal/operators';

@Injectable()
export class UserService {
  private userSubject: Subject<IUser> = new Subject<IUser>();

  constructor() {}

  get user$() {
    return this.userSubject.asObservable().pipe(
      filter((user: IUser) => !!user)
    );
  }

  setUser(user: IUser) {
    this.userSubject.next(user);
  }
}
