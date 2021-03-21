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
  private artist_id: any = "6eUKZXaKkcviH0Ku9w2n3V";

  private artist_id2: any = "66CXWjxzNUsdJxJ2JdwvnR";

  private artist_id3: any = "04gDigrS5kc9YWfZHwBETP";

  private headers: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQDc6ynnRGXIKo-qEZWcTYfBcLDxkWwaxei7AUej5HwRbFLuyA7TkmM48qrUix_QsLHFJw0wJIgCtq-3lQcnCU-sL0BklATK7y9Gnq-xZ2m1gjtYtXt0tpKjkr9eJf3PCh9AV5oTx1fU6_1G5LZi8GcA33kH0N8kf-Yp'
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
    return this._http.get(this.url + 'artists/'+this.artist_id+'/related-artists', {
      headers: this.headers
    }).pipe(map(data => data['artists']));
  }

  getTrack(id){
    return this._http
      .get(this.url + `albums/${id}/tracks`, {
        headers: this.headers
      })
      .pipe(map(data => data['items']));
  }

  getRecommendedArtists(){
    return this._http.get(this.url + 'artists/'+this.artist_id2+'/related-artists', {
      headers: this.headers
    }).pipe(map(data => data['artists']));
  }

  getFavoriteArtists(){
    return this._http.get(this.url + 'artists/'+this.artist_id3+'/related-artists', {
      headers: this.headers
    }).pipe(map(data => data['artists']));
  }

  




}
