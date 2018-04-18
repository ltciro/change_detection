import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private playList: any[] = [
    {name: 'Desaprendiendo', played: false},
    {name: 'La vida plena', played: false}
    ];
    private songPlaying = '';
    private isPlaying = false;

  play(song: any) {
     this.isPlaying = this.songPlaying === song.name ? !this.isPlaying : true;
     this.songPlaying = song.name ;
  }
}
