import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute) { }

  ngOnInit() {
    // this._route.params.subscribe(params => console.log(params));
  }

}
