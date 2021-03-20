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
      'Bearer BQB-j4WN7yN3GZVNev6r8r1U5ZYJiiGbEf9wbKvqIsgn9worxELJv3vVFpZz68WOGA4sZXLpCYyDkhlvTpo-RFzT6OO9WTwuBaoMA9T1sPW4Hs3mcm65ePAFrBo8K3BLRsybjHRkbNcxRlRuPF2haAzekqPav6-LQ0Wn'
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
