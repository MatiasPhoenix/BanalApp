import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LateralBarComponent } from './Components/lateral-bar/lateral-bar.component';
import { PromemoriaComponent } from './Components/promemoria/promemoria.component';
import { CreditsComponent } from './Components/credits/credits.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:PromemoriaComponent},
  { path: 'lateral-bar', component:LateralBarComponent},
  { path: 'credits', component:CreditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
