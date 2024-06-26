import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LateralBarComponent } from './Components/lateral-bar/lateral-bar.component';
import { PromemoriaComponent } from './Components/promemoria/promemoria.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'lateral-bar', component:LateralBarComponent},
  { path: 'promemoria', component:PromemoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
