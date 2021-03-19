import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  artists: any[] = [];

  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit() {
   // console.log(this.artists)
  }

  searchArtist(txt) {
    this._spotifyService.getArtist(txt).subscribe((data: any) => {
      this.artists = data;
      console.log(this.artists)
    });
  }

}
