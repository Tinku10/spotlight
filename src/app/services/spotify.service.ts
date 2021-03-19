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
      'Bearer BQAAnXEbSZPVNGeq_X4T-tg-6flNDq5YCVNi9oPyoF6HAMRzpNPxTUHfGYOmXbkdsStiSHCP_YWM9_q0SZouyUtSH0Rxw4FBAXwq7jfNTTGaZ8vg2V9Q8K1MeKERDsv-6qU1P5M6XFagnTdB_Si8wEYQMo6okDivA7i09rk'
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
