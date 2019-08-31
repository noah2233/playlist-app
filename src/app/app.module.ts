import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// plugin
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// shared
import { SiteHeaderComponent } from '@shared/site-header/site-header.component';

// pages
import { HomeComponent } from '@pages/home/home.component';
import { TrackComponent } from '@pages/tracks/track/track.component';
import { TrackListComponent } from '@pages/tracks/track-list/track-list.component';
import { ReplaceTrackComponent } from './pages/tracks/replace-track/replace-track.component';
import { TracksService } from '@pages/tracks/tracks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackComponent,
    SiteHeaderComponent,
    TrackListComponent,
    ReplaceTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    HttpClientModule
  ],
  providers: [TracksService],
  entryComponents: [ReplaceTrackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
