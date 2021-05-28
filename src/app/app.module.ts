import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from '@angular/router';

import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { NewReleaseContainerComponent } from './components/new-release-container/new-release-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetArtistContainerComponent } from './components/get-artist-container/get-artist-container.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PlayerComponent } from './components/player/player.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';
import { NumbeautifyPipe } from './pipes/numbeautify.pipe';
import { MusicComponent } from './components/music/music.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { RecommendContainerComponent } from './components/recommend-container/recommend-container.component';
import { FavoritesContainerComponent } from './components/favorites-container/favorites-container.component';
import { NewcardComponent } from './newcard/newcard.component';
import { FavcardComponent } from './favcard/favcard.component';

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
    PlayerComponent,
    HeaderComponent,
    SearchResultsComponent,
    NumbeautifyPipe,
    MusicComponent,
    NoimagePipe,
    RecommendContainerComponent,
    FavoritesContainerComponent,
    NewcardComponent,
    FavcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'artist', component: GetArtistContainerComponent , canActivate: [AuthGuard]},
      { path: 'dashboard/results', component: SearchResultsComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/results/details', component: PlayerComponent , canActivate: [AuthGuard] },
      { path: 'dashboard/player', component: MusicComponent , canActivate: [AuthGuard] },
      { path: 'dashboard/recommended', component: RecommendContainerComponent , canActivate: [AuthGuard] },
      { path: 'dashboard/favorites', component: FavoritesContainerComponent , canActivate: [AuthGuard] }
    ]),
    AuthModule.forRoot({
      domain: 'dev-w738k3gh.auth0.com',
      clientId: 'l2jIo1zV3YgiLdlfvuvkRqomS7UVYXrD'
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
