import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  currentUrl = '';

  constructor(private _router: Router) {
    _router.events.subscribe((event: NavigationEnd) => {
      if (event.constructor === NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {}
}
