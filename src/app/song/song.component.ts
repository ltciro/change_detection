import {
  Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges,
  OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
 AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() idx;
  @Input() song;
  @Output() play = new EventEmitter();
  constructor() { }

  playSong() {
    this.play.emit(this.song);
  }













  // tslint:disable-next-line:no-trailing-whitespace
  

  /**====================
   * HOOKS
   ===========================**/
  ngOnInit()    {  console.log(`onInit song ${this.song.name}`); }

  ngOnDestroy() {  console.log(`onDestroy song ${this.song.name}`); }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(` song ${this.song.name} ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  ngDoCheck() { console.log(`ngDoCheck song ${this.song.name}`); }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log(`AfterViewInit song ${this.song.name}`);
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    console.log(`ngAfterViewChecked song ${this.song.name}`);
  }
  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    console.log(`AfterContentInit song ${this.song.name}`);
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    console.log(`AfterContentChecked song ${this.song.name}`);
  }

}
