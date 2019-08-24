import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { TrackComponent } from '@pages/tracks/track/track.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: TrackComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
