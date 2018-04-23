import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads = '../.././assets/img/1.png';
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.ref.markForCheck();
      this.ads = '../.././assets/img/2.png';
    }, 3000);
  }

}
