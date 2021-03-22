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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService) {}

  ngOnInit() {
    this._spotifyService.getFavoriteArtists().subscribe((res) => {
      this.artist=res;
    },(err) =>{
      //console.log(err);
    }
    );
  }

}
