import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, BaseResponseOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { ContactMeComponent } from './contact-me/contact-me.component';
import { from } from 'rxjs';
import { FriendComponent } from './friend/friend.component';
import { AuthService } from './services/auth.service';
import { NavbarUserComponent } from './navbaruser/navbaruser.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { FilterPipeModule } from 'ngx-filter-pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactMeComponent,
    FriendComponent,
    NavbarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    FilterPipeModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'home', component:HomeComponent},
      {path:'contactMe', component:ContactMeComponent},
      {path:'friend', component:FriendComponent}])
  ],
  providers: [
    AuthService,
    fakeBackendProvider,
    BaseRequestOptions,
    MockBackend    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
