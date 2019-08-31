import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SortByOption, Track } from '@common/modals';
@Component({
  selector: 'replace-track',
  templateUrl: './replace-track.component.html',
  styleUrls: ['./replace-track.component.css']
})
export class ReplaceTrackComponent implements OnInit {
  replaceForm: FormGroup;
  tracks: Track[] = [
    {
      track_id: 1,
      date_added: new Date(),
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
      date_added: new Date(),
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
      date_added: new Date(),
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
      date_added: new Date(),
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
  ]

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initReplaceForm();
  }

  initReplaceForm() {
    this.replaceForm = this._formBuilder.group(
      { replace: new FormControl('') }
    );
  }
}
