import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private router: Router, private activated: ActivatedRoute, private spotify: SpotifyService) { }
  info: any;

  ngOnInit(): void {
    this.activated.queryParams.subscribe(params => {
      console.log(params);
      if(params.type=='artist'){
        this.spotify.getArtistById(params.id).subscribe((res) => {
          this.info = res;
          console.log(this.info);
        });
      }
    });
  }

}
