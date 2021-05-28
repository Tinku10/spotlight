import { FavouritesService } from 'src/app/services/favourites.service';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-favorites-container',
  templateUrl: './favorites-container.component.html',
  styleUrls: ['./favorites-container.component.css']
})
export class FavoritesContainerComponent implements OnInit {

  
  artistId: string;
  artist: any = [];
<<<<<<< HEAD
=======

  userId: String;
  //preloading: boolean = true;
  //topTracks: any[] = [];
>>>>>>> 37e1c735e98e11471a6cd999bf2ff202cf4ad32c

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService,
    private auth: AuthService,
    private fav: FavouritesService) {}

  ngOnInit() {
<<<<<<< HEAD
    this._spotifyService.getFavoriteArtists().subscribe((res) => {
      this.artist=res;
    },(err) =>{
      //console.log(err);
    }
    );
=======
    this.auth.user$.subscribe(res=> {
      this.userId=res.email;
      this.fav.getFavorites().subscribe(res=>{
        this.artist=res;
        console.log(this.artist);
      });
    })
>>>>>>> 37e1c735e98e11471a6cd999bf2ff202cf4ad32c
  }

  // displayFavorites(){
  //   return this.fav.fetchFavourites(this.userId).subscribe(res=>{
  //     this.artists=res;
  //     console.log(this.artists);
  //   });
  // }




}
