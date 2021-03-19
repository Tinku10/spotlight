import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  artist: any;

  constructor(private _router: Router) {}

  ngOnInit() {
    console.log(this.artist);
    //this.getArtist();
    //this.getTopTracks();
  }

  // getArtist() {
  //   this._spotifyService.getArtistById(this.artistId).subscribe((data: any) => {
  //     this.artist = data;
  //     console.log(data);
  //     this.preloading = false;
  //   });
  // }

  // getTopTracks() {
  //   this._spotifyService.getTopTracks(this.artistId).subscribe((data: any) => {
  //     // this.artist=data;
  //     console.log(data);
  //     this.topTracks = data;
  //   });
  // }

  seeArtists(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    this._router.navigate(['/artist', artistId]);
  }

}
