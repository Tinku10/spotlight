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
  message;
  //preloading: boolean = true;
  //topTracks: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService) {}

  ngOnInit() {
    this._spotifyService.getRecommendedArtists().subscribe((res) => {
      this.artist=res;
      if(this.artist.length==0){
        this.message = 'No results found';
      }
    },(err) =>{
      console.log(err);
    }
    );
  }

}
