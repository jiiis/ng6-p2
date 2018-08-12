import {Component, OnInit} from '@angular/core';

import {listStagger} from '../animations';
import {IPost} from '../interfaces';
import {DataService} from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
  animations: [
    listStagger
  ]
})
export class PostsComponent implements OnInit {
  posts$: IPost[];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.getPosts().subscribe((posts: IPost[]) => this.posts$ = posts);
  }
}
