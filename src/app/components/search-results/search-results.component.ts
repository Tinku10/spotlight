import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  //artistId: string;
  //topTracks: any[] = [];

  public artists: any = [];


  constructor(
    //private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _spotifyService: SpotifyService
  ) {
    // this._activatedRoute.params.subscribe(params => {
    //   this.artistId = params['id'];
    // });
  }

  ngOnInit() {
    //console.log(this.artist);
    //this.getArtist();
    //this.getTopTracks();
  }

  // getArtist() {
  //   this._spotifyService.getArtistById(this.artistId).subscribe((data: any) => {
  //     this.artist = data;
  //     console.log(this.artist.name);
  //   });
  // }

  // getTopTracks() {
  //   this._spotifyService.getTopTracks(this.artistId).subscribe((data: any) => {
  //     // this.artist=data;
  //     console.log(data);
  //     this.topTracks = data;
  //   });
  // }

  searchArtist(txt) {
    console.log(txt)
    this._spotifyService.getArtist(txt).subscribe((data: any) => {
      console.log(data)
      this.artists = data;
    });
  }

  clickEvent(item: any){
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    console.log("here")
    this._router.navigate(['dashboard/player/', artistId]);
  }

}
