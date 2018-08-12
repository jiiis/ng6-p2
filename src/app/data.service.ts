import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser, IPost} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId): Observable<IUser> {
    return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
