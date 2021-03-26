import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {

  @Input()
  item: any;
  userId: String;

  constructor(private _router: Router, private fav: FavouritesService, private auth: AuthService) {}

  isLiked;
  
  ngOnInit() {

    this.auth.user$.subscribe(res => {
      this.userId = res.email;
      this.fav.checkFavourites(this.item.album.id, this.userId).subscribe(resp => {
        this.isLiked = resp;
      })
    })
    }

    ngOnChanges(){
      this.fav.checkFavourites(this.item.album.id, this.userId).subscribe(resp => {
        this.isLiked = resp;
      })
    }

  seeitems(item: any) {
    let artistId;

    if (item.album.type === 'artist') {
      artistId = item.album.id;
    } else {
      artistId = item.album.artists[0].id;
    }

    this._router.navigate(['dashboard', 'results', 'items'], { queryParams: { type: 'artist', id: artistId },   queryParamsHandling: 'merge' } );
  }

  gotoplayer(url, name, image){
    this._router.navigate(['dashboard', 'player'], { queryParams: { id: url, name: name, img: image },   queryParamsHandling: 'merge' })
  }

  alterFav(){
    this.fav.checkFavourites(this.item.id, this.userId).subscribe(resp => {
      this.isLiked = !resp;
      console.log(resp);
    })
    let newOb = {
      "albumId": this.item.album.id,
      "name": this.item.album.name,
      "image": this.item.album.images[1].url,
      "userId": this.userId,
      // "artists": this.item.artists
    }
    console.log(newOb);
    this.fav.postFavourites(newOb).subscribe(res => {
      console.log(res);
    });
  }

}
