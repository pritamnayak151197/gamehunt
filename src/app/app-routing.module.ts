import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostYourMatchComponent } from './host-your-match/host-your-match.component';
import { LoginComponent } from './login/login.component';
import { FreeMatchesComponent } from './matches/free-matches/free-matches.component';
import { PaidMatchesComponent } from './matches/paid-matches/paid-matches.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full'},
  {path:'home',component:UserComponent},
  {path:'registerforfreematch',component:FreeMatchesComponent},
  {path:'registerforpaidmatch',component:PaidMatchesComponent},
  {path:'hostmatch',component:HostYourMatchComponent},
  {path:'tdm',redirectTo:'home'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'editprofile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
