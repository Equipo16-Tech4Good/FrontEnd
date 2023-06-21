import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationModule } from './authorization/authorization.module';
import { TipsComponent } from './tips/tips.component';
import { PatoComponent } from './pato/pato.component';
import { MedallasComponent } from './medallas/medallas.component';
import { InformacionComponent } from './informacion/informacion.component';
import { TestComponent } from './test/test.component';
import { LogrosComponent } from './logros/logros.component';

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
