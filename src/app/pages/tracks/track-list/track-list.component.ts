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
  trackList: Track[] = [
    {
      track_id: 1,
      artist_name: 'The Jackson 5',
      track_name: 'Reach In',
      track_duration: 0,
      album: {
        title: 'The Definitive Collection',
        cover_small: '',
        cover_medium: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/250x250-000000-80-0-0.jpg',
        cover_big: '',
        cover_xl: ''
      }
    },
    {
      track_id: 2,
      artist_name: 'The Jackson 5',
      track_name: 'Reach In',
      track_duration: 0,
      album: {
        title: 'The Definitive Collection',
        cover_small: '',
        cover_medium: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/250x250-000000-80-0-0.jpg',
        cover_big: '',
        cover_xl: ''
      }
    },
    {
      track_id: 3,
      artist_name: 'The Jackson 5',
      track_name: 'Reach In',
      track_duration: 0,
      album: {
        title: 'The Definitive Collection',
        cover_small: '',
        cover_medium: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/250x250-000000-80-0-0.jpg',
        cover_big: '',
        cover_xl: ''
      }
    },
    {
      track_id: 4,
      artist_name: 'The Jackson 5',
      track_name: 'Reach In',
      track_duration: 0,
      album: {
        title: 'The Definitive Collection',
        cover_small: '',
        cover_medium: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/250x250-000000-80-0-0.jpg',
        cover_big: '',
        cover_xl: ''
      }
    }
  ];

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

  getTrackListItemCover(track: Track): string {
    // [style.background]="'url(/images/' + trackListItem.img + ')'"

    return track ? `url(${track.album.cover_medium})` : null;
  }

}
