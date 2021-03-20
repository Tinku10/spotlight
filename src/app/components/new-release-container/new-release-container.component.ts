import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-new-release-container',
  templateUrl: './new-release-container.component.html',
  styleUrls: ['./new-release-container.component.css']
})
export class NewReleaseContainerComponent implements OnInit {

  newReleases: any[] = [];
  preloading: boolean = true;
  message: string;
  error: boolean = false;

  constructor(private _spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this._spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.preloading = false;
      },
      error => {
        this.preloading = false;
        this.error = true;
        this.message = error.error.error.message;
        console.log(error.error.error.message);
      }
    );
  }
  

}
