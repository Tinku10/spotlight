import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  items = [{
    name: 'hello',
    release_date: '20 Dec 2020'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
