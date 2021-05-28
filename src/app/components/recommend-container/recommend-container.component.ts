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
<<<<<<< HEAD
    //console.log(this.artist)
=======
>>>>>>> 37e1c735e98e11471a6cd999bf2ff202cf4ad32c
    this._spotifyService.getRecommendedArtists().subscribe((res) => {
      this.artist=res;
      if(this.artist.length==0){
        this.message = 'No results found';
      }
    },(err) =>{
      //console.log(err);
    }
    );
  }

}
