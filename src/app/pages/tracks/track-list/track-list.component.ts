import { Component, OnInit } from '@angular/core';

import { SortByOption } from '@common/modals/sort-by-option';
@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  sortByOptions: SortByOption[] = [];

  constructor() { }

  ngOnInit() {
    this.initSortBy();
  }

  initSortBy() {
    this.sortByOptions = [
      { key: 1, value: 'Addition Order' },
      { key: 2, value: 'Track Name' },
      { key: 3, value: 'Artist Name' },
      { key: 4, value: 'Album Name' },
      { key: 5, value: 'Track Length' },
    ];
  }

}
