import { AuthService } from '@auth0/auth0-angular';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()
  item: any;
  userId: String;

  constructor(private router: Router, private activated: ActivatedRoute, private spotify: SpotifyService, private fav: FavouritesService, private auth: AuthService) { }
  info: any;
  tracks;

  isLiked;

  ngOnInit(): void {
    this.activated.queryParams.subscribe(params => {
      if(params.type=='artist'){
        this.spotify.getArtistById(params.id).subscribe((res) => {
          this.info = res;
          console.log(this.info);
        });
        this.spotify.getTopTracks(params.id).subscribe((res) => {
          this.tracks = res;
          console.log(this.tracks);
        })
      }
    });

    // this.auth.user$.subscribe(res => {
    //   this.userId = res.email;
    //   this.fav.checkFavourites(this.tracks.id, this.userId).subscribe(resp => {
    //     this.isLiked = resp;
    //   })
    // })
  }

  // alterFav(){
  //   this.fav.checkFavourites(this.tracks.id, this.userId).subscribe(resp => {
  //     this.isLiked = !resp;
  //     console.log(resp);
  //   })
  //   let newOb = {
  //     "albumId": this.tracks.id,
  //     "name": this.tracks.name,
  //     "image": this.tracks.images[0].url,
  //     "userId": this.userId,
  //     // "artists": this.detail.artists
  //   }
  //   console.log(newOb);
  //   this.fav.postFavourites(newOb).subscribe(res => {
  //     console.log(res);
  //   });
  



  // gotomusic(url, name, image){
  //   this.router.navigate(['dashboard', 'player'], { queryParams: { id: url, name: name, img: image }} );
  // }

}
