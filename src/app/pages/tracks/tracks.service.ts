import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(
    private _httpClient: HttpClient) { }

  search(query: string) {
    const url = environment.apiURL + '/search?q=' + query;

    return this._httpClient.get(url);
  }
}
