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
      'Bearer BQBXlXPSUqq5TfskL9-tZYL0rVFbiu8jBXkm1t1bI086b3EoTJ3BvPXcN9pxXaPr1dcFaZiEaWtS_yJ-I605KWdFCwew59Edj9SYJeMpW8ffQrv7TNBJ22N7rerRMt2RPZXDZdn7_u2-9eulA5Wy04gwDtiZCuU'
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
