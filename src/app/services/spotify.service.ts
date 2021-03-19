import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) {}

  private url: string = 'https://api.spotify.com/v1/';
  private id: any = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6";

  private headers: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQA5EmoY-Cd0ASjJfQT4w9WYwBXCdNxiUKsrxaZJ-M5IFZOxN0EqVLGRrogV9OjfEBTfRatqKzIXstnoj--suasJvae9X7yFxuPsCuwq3ir0SBZO7db0zMR4j3s1HXmD9l93MP0UUb5XzdWJW6HZgvRtaRIrBMs'
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

  getSeveralArtists(){
    return this._http.get(this.url + 'artists?ids='+this.id, {
      headers: this.headers
    }).pipe(map(data => data['artists']));
  }



}
