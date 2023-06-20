import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { TipsComponent } from './tips/tips.component';
import { PatoComponent } from './pato/pato.component';
import { MedallasComponent } from './medallas/medallas.component';
import { InformacionComponent } from './informacion/informacion.component';
import { TestComponent } from './test/test.component';
import { LogrosComponent } from './logros/logros.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    TipsComponent,
    PatoComponent,
    MedallasComponent,
    InformacionComponent,
    TestComponent,
    LogrosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
