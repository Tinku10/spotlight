import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  detail: any;

  constructor(private _router: Router) {}

  ngOnInit() {}

  seeDetails(item: any) {
    let artistId;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    this._router.navigate(['dashboard', 'results', 'details'], { queryParams: { type: 'artist', id: artistId },   queryParamsHandling: 'merge' } );
  }

  gotoplayer(url, name, image){
    this._router.navigate(['dashboard', 'player'], { queryParams: { id: url, name: name, img: image },   queryParamsHandling: 'merge' })
  }

}
