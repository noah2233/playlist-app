import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { SortByOption, Track } from '@common/modals';

import { orderBy } from 'loadsh';
@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  sortByOptions: SortByOption[] = [];
  sortByForm: FormGroup;
  trackList: Track[] = [];

  constructor(
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initSortBy();
  }

  initSortBy() {
    this.sortByOptions = [
      { key: 1, value: 'Addition Order' },
      { key: 2, value: 'Track Name' },
      { key: 3, value: 'Artist Name' },
      { key: 4, value: 'Album Name' },
      { key: 5, value: 'Track Length' }
    ];

    // order list
    this.sortByOptions = orderBy(this.sortByOptions, ['value']);

    // init form
    this.sortByForm = this._formBuilder.group({ sortBy: new FormControl('') });

    // init default value
    this.sortByForm.controls['sortBy'].setValue(this.sortByOptions.find((sortByOption) => sortByOption.key === 1));
  }

}
