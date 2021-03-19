import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  artists: any[] = [];

  @Output() public event = new EventEmitter<String>() ;
  

  constructor(private _spotifyService: SpotifyService, private router: Router) {}

  ngOnInit() {
   // console.log(this.artists)
  }

  searchArtist(txt) {
    this._spotifyService.getArtist(txt).subscribe((data: any) => {
      this.artists = data;
      this.event.emit(txt);
      console.log(this.artists[0]);
      this.router.navigate(["/dashboard/results"]);
    }); 
  }

  // sendArtist(){
  //   this.event.emit(this.artists[0]);
  // }

}
