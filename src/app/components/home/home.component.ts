import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuth = false;

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document, private router: Router) { }

  ngOnInit(): void {
    console.log(this.auth.isAuthenticated$.subscribe(res => {
      if (res) {
        this.router.navigate(['dashboard']);
        this.isAuth = true;
      }
    }));
  }

}
