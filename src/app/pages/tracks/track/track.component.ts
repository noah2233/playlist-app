import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Track } from '@common/modals';
@Component({
  selector: 'track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  track: Track = {
    track_id: 4188287,
    date_added: new Date(),
    artist_name: 'The Jackson 5',
    track_name: 'I Want You Back',
    track_duration: 0,
    album: {
      title: 'The Definitive Collection',
      cover_small: '',
      cover_medium: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/250x250-000000-80-0-0.jpg',
      cover_big: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/500x500-000000-80-0-0.jpg',
      cover_xl: 'https://cdns-images.dzcdn.net/images/cover/6097a6304e58084181a2419595d88945/1000x1000-000000-80-0-0.jpg'
    }
  };

  constructor(
    private _route: ActivatedRoute) { }

  ngOnInit() {
    // this._route.params.subscribe(params => console.log(params));
  }

  getTrackCover(track: Track) {
    return track ? `url(${track.album.cover_big})` : null;
  }

}
