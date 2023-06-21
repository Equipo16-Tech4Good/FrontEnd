import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { LoginComponent } from './authorization/login/login.component';
import { TipsComponent } from './tips/tips.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LogrosComponent } from './logros/logros.component';
import { MedallasComponent } from './medallas/medallas.component';
import { TestComponent } from './test/test.component';

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
    path:'tips',
    component:TipsComponent
  },
  {
    path:'medallas',
    component:MedallasComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'**',
    redirectTo:'landing'
  },
  {
    path:'informacion',
    component: InformacionComponent
  },
  {
    path:'logros',
    component:LogrosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
