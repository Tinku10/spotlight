import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public test: string;
  artistId: string;
  topTracks: any[] = [];
  public artist: any = {};


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.artistId = params['id'];
    });
  }

  ngOnInit() {
    console.log(this.test)
    //this.getArtist();
    //this.getTopTracks();
  }

  // getArtist() {
  //   this._spotifyService.getArtistById(this.artistId).subscribe((data: any) => {
  //     this.artist = data;
  //     console.log(data);
  //   });
  // }

  getTopTracks() {
    this._spotifyService.getTopTracks(this.artistId).subscribe((data: any) => {
      // this.artist=data;
      console.log(data);
      this.topTracks = data;
    });
  }

  // receiveArtist($event){
  //   this.artist=$event;
  // }

}
