import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  private playList: any[] = [
    {name: 'Desaprendiendo', played: false},
    {name: 'La vida plena', played: false}
    ];
    private songPlaying = '';
    private isPlaying = false;

  constructor() { }

  ngOnInit() {
  }

  play(song: any) {
    this.isPlaying = this.songPlaying === song.name ? !this.isPlaying : true;
    this.songPlaying = song.name ;
 }

}
