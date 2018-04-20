import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Artists } from '../data/artists';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListComponent implements OnInit {
  private artistList: any[] = Artists;
  private commentArtista;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  doListenCD(value) {
    if (value) {
      this.ref.reattach();
    } else {
      this.ref.detach();
    }
  }

}
