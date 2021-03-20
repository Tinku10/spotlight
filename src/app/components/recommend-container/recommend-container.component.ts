import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
})
export class RecommendContainerComponent implements OnInit {

  artistId: string;
  artist: any = [];
  //preloading: boolean = true;
  //topTracks: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService) {}

  ngOnInit() {
    console.log(this.artist)
    this._spotifyService.getRecommendedArtists().subscribe((res) => {
      console.log(res)
      this.artist=res;
      console.log(this.artist);
    },(err) =>{
      console.log(err);
    }
    );
  }

}
