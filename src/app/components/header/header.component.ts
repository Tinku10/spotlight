import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  artists: any[] = [];
  show = false;

  // @Output() public newEvent = new EventEmitter<any>() ;
  

  constructor(private _spotifyService: SpotifyService, private router: Router, @Inject(DOCUMENT) public document: Document, public auth: AuthService) {}



  clickEvent(){
    this.router.navigate(["/dashboard/results"]);
  }

  name: String;
  photo: String;


  ngOnInit(): void {
    this.auth.user$.subscribe(res => {
      this.name = res.name;
      this.photo = res.picture;
    })
  }
  



}
