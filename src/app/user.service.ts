import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {IUser} from './interfaces';
import {filter} from 'rxjs/internal/operators';

@Injectable()
export class UserService {
  private userSubject: ReplaySubject<IUser> = new ReplaySubject<IUser>();

  constructor() {}

  get user$() {
    return this.userSubject.asObservable().pipe(
      filter((user: IUser) => !!user)
    );
  }

  setUser(user: IUser): void {
    this.userSubject.next(user);
  }
}
