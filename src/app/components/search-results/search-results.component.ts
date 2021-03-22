import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
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
  public show = false;
  name: String;
  photo: String;


  constructor(
    //private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _spotifyService: SpotifyService,
    public auth: AuthService
  ) {
    // this._activatedRoute.params.subscribe(params => {
    //   this.artistId = params['id'];
    // });
  }



  ngOnInit(): void {
    this.auth.user$.subscribe(res => {
      this.name = res.name;
      this.photo = res.picture;
    })
  }

  searchArtist(txt) {
    //console.log(txt)
    this._spotifyService.getArtist(txt).subscribe((data: any) => {
      //console.log(data)
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
    //console.log("here")
    this._router.navigate(['dashboard/player?q=', artistId]);
  }

}
