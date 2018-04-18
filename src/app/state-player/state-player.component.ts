import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-player',
  templateUrl: './state-player.component.html',
  styleUrls: ['./state-player.component.css']
})
export class StatePlayerComponent implements OnInit {
  @Input() isPlaying;
  @Input() songPlaying;

  constructor() { }

  ngOnInit() {
  }

}
