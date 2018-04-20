import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongListComponent implements OnInit {
  private playList: any[] = [
    {name: 'Desaprendiendo', played: false},
    {name: 'La vida plena', played: false}
  ];
  private songPlaying = {name: '', played: false};

  constructor() { }

  ngOnInit() {
  }

  play(song: any, index) {
    const isplaying = this.songPlaying.name === song.name ? !song.played : true;
    this.playList[index].played = isplaying ;

// Actualiza por atributo
    this.songPlaying.name = song.name ;
    this.songPlaying.played = isplaying ;

// Actualiza por referencia
    // this.songPlaying = {name: song.name, played: isplaying} ;
 }

}
