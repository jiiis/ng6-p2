import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IUser} from './interfaces';

@Injectable()
export class UserService {
  private userSubject: Subject<IUser> = new Subject<IUser>();

  constructor() {}


}
