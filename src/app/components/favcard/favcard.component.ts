import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favcard',
  templateUrl: './favcard.component.html',
  styleUrls: ['./favcard.component.css']
})
export class FavcardComponent implements OnInit {

  @Input()
  item: any;
  userId: String;

  constructor(private _router: Router, private fav: FavouritesService, private auth: AuthService) {}

  isLiked;
  
  ngOnInit() {

    this.auth.user$.subscribe(res => {
      this.userId = res.email;
      this.fav.checkFavourites(this.item.albumId, this.userId).subscribe(resp => {
        this.isLiked = resp;
      })
    })
    }

    ngOnChanges(){
      this.fav.checkFavourites(this.item.albumId, this.userId).subscribe(resp => {
        this.isLiked = resp;
      })
    }

  seeitems(item: any) {
    let artistId;

    if (item.type === 'artist') {
      artistId = item.albumId;
    } else {
      artistId = item.artists[0].albumId;
    }

    this._router.navigate(['dashboard', 'results', 'items'], { queryParams: { type: 'artist', id: artistId },   queryParamsHandling: 'merge' } );
  }

  gotoplayer(url, name, image){
    this._router.navigate(['dashboard', 'player'], { queryParams: { id: url, name: name, img: image },   queryParamsHandling: 'merge' })
  }

  alterFav(){
    this.fav.checkFavourites(this.item.albumId, this.userId).subscribe(resp => {
      this.isLiked = !resp;
      console.log(resp);
    })
    let newOb = {
      "albumId": this.item.albumId,
      "name": this.item.name,
      "image": this.item.image,
      "userId": this.userId,
      // "artists": this.item.artists
    }
    console.log(newOb);
    this.fav.postFavourites(newOb).subscribe(res => {
      console.log(res);
    });
  }

}
