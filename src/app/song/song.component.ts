import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() idx;
  @Input() song;
  @Output() play = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  playSong() {
    this.play.emit(this.song);
  }

}
