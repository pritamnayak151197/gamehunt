import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {CardModule} from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonNavBarComponent } from './button-nav-bar/button-nav-bar.component';
import { HostYourMatchComponent } from './host-your-match/host-your-match.component';
import { FreeMatchesComponent } from './matches/free-matches/free-matches.component';
import { PaidMatchesComponent } from './matches/paid-matches/paid-matches.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    NavbarComponent,
    ButtonNavBarComponent,
    HostYourMatchComponent,
    FreeMatchesComponent,
    PaidMatchesComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
