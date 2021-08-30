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
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    NavbarComponent,
    ButtonNavBarComponent,
    HostYourMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
