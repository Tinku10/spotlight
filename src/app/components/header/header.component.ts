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

  // @Output() public newEvent = new EventEmitter<any>() ;
  

  constructor(private _spotifyService: SpotifyService, private router: Router) {}

  ngOnInit() {
   // console.log(this.artists)
  }

  // @Output() public newEvent = new EventEmitter<any>() ;

  // searchArtist(txt) {
  //   this._spotifyService.getArtist(txt).subscribe((data: any) => {
  //     this.artists = data;
  //     console.log("Inside search artist")
  //     console.log(this.artists[0].id)
  //     // this.newEvent.emit(txt);
  //     this.router.navigate(["/dashboard/results",this.artists[0].id]);
  //   }); 
  // }

  clickEvent(){
    this.router.navigate(["/dashboard/results"]);
  }

  



}
