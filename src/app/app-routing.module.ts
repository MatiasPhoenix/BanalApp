import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LateralBarComponent } from './Components/lateral-bar/lateral-bar.component';
import { PromemoriaComponent } from './Components/promemoria/promemoria.component';
import { CreditsComponent } from './Components/credits/credits.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'lateral-bar', component:LateralBarComponent},
  { path: 'promemoria', component:PromemoriaComponent},
  { path: 'credits', component:CreditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
