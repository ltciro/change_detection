import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artist;
  constructor() { }

 /**====================
   * HOOKS
   ===========================**/
   ngOnInit()    {  console.log(`onInit artist ${this.artist.name}`); }

   ngOnDestroy() {  console.log(`onDestroy artist ${this.artist.name}`); }
 
   ngOnChanges(changes: SimpleChanges) {
     // tslint:disable-next-line:forin
     for (const propName in changes) {
       const chng = changes[propName];
       const cur  = JSON.stringify(chng.currentValue);
       const prev = JSON.stringify(chng.previousValue);
       console.log(` artist ${this.artist.name} ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
     }
   }
   ngDoCheck() { console.log(`ngDoCheck artist ${this.artist.name}`); }
 
   ngAfterViewInit() {
     // viewChild is set after the view has been initialized
     console.log(`AfterViewInit artist ${this.artist.name}`);
   }
 
   ngAfterViewChecked() {
     // viewChild is updated after the view has been checked
     console.log(`ngAfterViewChecked artist ${this.artist.name}`);
   }
   ngAfterContentInit() {
     // contentChild is set after the content has been initialized
     console.log(`AfterContentInit artist ${this.artist.name}`);
   }
 
   ngAfterContentChecked() {
     // contentChild is updated after the content has been checked
     console.log(`AfterContentChecked artist ${this.artist.name}`);
   }

}
