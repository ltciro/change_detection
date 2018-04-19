import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongComponent } from './song/song.component';
import { StatePlayerComponent } from './state-player/state-player.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongComponent,
    StatePlayerComponent,
    ArtistComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
