import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LateralBarComponent } from './Components/lateral-bar/lateral-bar.component';
import { PromemoriaComponent } from './Components/promemoria/promemoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LateralBarComponent,
    PromemoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
