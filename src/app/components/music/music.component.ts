import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private spotify: SpotifyService) { }
  info
  name;
  img;

  ngOnInit(): void {
    this.activated.queryParams.subscribe(params => {
      this.info = params.id;
      this.name = params.name;
      this.img = params.img;
        this.spotify.getTrack(params.id).subscribe((res) => {
          this.info = res;
          console.log(res);
          console.log(this.name);
        });
    });
  }

}
