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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    DashboardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: CardComponent}
    ]),
    AuthModule.forRoot({
      domain: 'dev-3qx9j9qj.us.auth0.com',
      clientId: '0b09YEZyX6r8JxdtvZw7Nx3BiHZYcPM0'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
