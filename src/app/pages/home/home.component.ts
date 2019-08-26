import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { SearchResult } from '@common/modals';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: SearchResult[] = [
    { track_id: 1, artist_name: 'The Jackson 5', track_name: 'Reach In' },
    { track_id: 2, artist_name: 'The Jackson 5', track_name: 'Reach In' },
    { track_id: 3, artist_name: 'The Jackson 5', track_name: 'Reach In' },
    { track_id: 4, artist_name: 'The Jackson 5', track_name: 'Reach In' }
  ];

  constructor(
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = this._formBuilder.group({ search: new FormControl('') });
  }

}
