import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Track } from '@common/modals';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: Track[] = [
    { track_id: 1, track_duration: 0, artist_name: 'The Jackson 5', track_name: 'Reach In', album: null },
    { track_id: 2, track_duration: 0, artist_name: 'The Jackson 5', track_name: 'Reach In', album: null },
    { track_id: 3, track_duration: 0, artist_name: 'The Jackson 5', track_name: 'Reach In', album: null },
    { track_id: 4, track_duration: 0, artist_name: 'The Jackson 5', track_name: 'Reach In', album: null }
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
