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
  //preloading: boolean = true;
  //topTracks: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService) {}

  ngOnInit() {
    console.log(this.artist)
    this._spotifyService.getFavoriteArtists().subscribe((res) => {
      console.log(res)
      this.artist=res;
      console.log(this.artist);
    },(err) =>{
      console.log(err);
    }
    );
  }

}
