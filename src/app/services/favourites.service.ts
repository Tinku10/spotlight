import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient) { }

  fetchFavourites(id){
    return this.http.get('http://localhost:4000/get/'+id);
  }

  postFavourites(fav){
    return this.http.post('http://localhost:4000/add', fav);
  }

  checkFavourites(albumId, userId){
    return this.http.get('http://localhost:4000/check?albumId=' + albumId + '&userId='+userId).pipe(map(data => data));
  }
}
