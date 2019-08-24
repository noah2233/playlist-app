import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared
import { SiteHeaderComponent } from '@shared/site-header/site-header.component';

// pages
import { HomeComponent } from '@pages/home/home.component';
import { TrackComponent } from '@pages/tracks/track/track.component';
import { TrackListComponent } from '@pages/tracks/track-list/track-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackComponent,
    SiteHeaderComponent,
    TrackListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
