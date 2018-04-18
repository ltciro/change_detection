import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-state-player',
  templateUrl: './state-player.component.html',
  styleUrls: ['./state-player.component.css']
})
export class StatePlayerComponent {
  @Input() isPlaying;
  @Input() songPlaying;

  constructor() { }

  /**====================
   * HOOKS
   ===========================**/
   ngOnInit()    {  console.log(`onInit state-player`); }

   ngOnDestroy() {  console.log(`onDestroy state-player`); }
 
   ngOnChanges(changes: SimpleChanges) {
     console.log(changes, 'nOnChanges state-player');
     // tslint:disable-next-line:forin
     for (const propName in changes) {
       const chng = changes[propName];
       const cur  = JSON.stringify(chng.currentValue);
       const prev = JSON.stringify(chng.previousValue);
       console.log(`state-player ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
     }
   }
   ngDoCheck() { console.log(`ngDoCheck state-player`); }
 
   ngAfterViewInit() {
     // viewChild is set after the view has been initialized
     console.log('AfterViewInit state-player');
   }
 
   ngAfterViewChecked() {
     // viewChild is updated after the view has been checked
     console.log('ngAfterViewChecked state-player');
   }
   ngAfterContentInit() {
     // contentChild is set after the content has been initialized
     console.log('AfterContentInit');
   }
 
   ngAfterContentChecked() {
     // contentChild is updated after the content has been checked
     console.log('AfterContentChecked state-player');
   }
 

}
