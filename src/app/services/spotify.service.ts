import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  private url: string = 'https://api.spotify.com/v1/';

  private headers: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQCZBo7XRkFHPoYDvfjpIUou01ccLLFKOeUyhpjS-HynFIAuEW1WDcGHYGGNGPXPWd72s2iJj_njDj0irJzvDdDmpw4OYUAC9QB5xblNbpfk5bXe-6HTx3QF6i9VDe6fIryPv13ZUjJIbMJ9u5YNY3-ZpmePK3I'
  });

  getNewReleases() {
    return this._http
      .get(this.url + `browse/new-releases`, { headers: this.headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtist(txt: string) {
    return this._http
      .get(
        this.url + `search?q=${txt}&type=artist&market=SV&offset=0&limit=20`,
        { headers: this.headers }
      )
      .pipe(map(data => data['artists'].items));
  }

  getArtistById(id: string) {
    return this._http.get(this.url + `artists/${id}`, {
      headers: this.headers
    });
  }

  getTopTracks(id: string) {
    return this._http
      .get(this.url + `artists/${id}/top-tracks?country=us`, {
        headers: this.headers
      })
      .pipe(map(data => data['tracks']));
  }
}
