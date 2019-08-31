import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { SearchResult } from '@common/modals';

import { debounceTime, filter } from 'rxjs/operators';

import { TracksService } from '@pages/tracks/tracks.service';
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
    private _formBuilder: FormBuilder,
    private _tracksService: TracksService) { }

  ngOnInit() {
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = this._formBuilder.group({ search: new FormControl('') });
    this.listenToSearch(this.searchForm);
  }

  listenToSearch(searchForm: FormGroup) {
    searchForm.controls['search'].valueChanges
      .pipe(debounceTime(500))
      .pipe(filter((val: string) => val.length > 2))
      .subscribe((value: string) => {
        this.search(value);
      });
  }

  search(value: string) {
    this._tracksService.search(value).subscribe(result => {
      console.log(result);
    });
  }
}
