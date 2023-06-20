import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { LoginComponent } from './authorization/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path:'lading',
    component:LandingPageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo:'landing'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
