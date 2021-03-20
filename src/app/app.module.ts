import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from '@angular/router';

import { AuthModule } from '@auth0/auth0-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { NewReleaseContainerComponent } from './components/new-release-container/new-release-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetArtistContainerComponent } from './components/get-artist-container/get-artist-container.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    DashboardComponent,
    CardComponent,
    NewReleaseContainerComponent,
    GetArtistContainerComponent,
    ArtistCardComponent,
    TimeAgoPipe,
    DomsafePipe,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'dashboard/artist', component: GetArtistContainerComponent}
    ]),
    AuthModule.forRoot({
      domain: 'dev-3qx9j9qj.us.auth0.com',
      clientId: '0b09YEZyX6r8JxdtvZw7Nx3BiHZYcPM0'
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
