import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Artists } from '../data/artists';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListComponent implements OnInit {
  private artistList: any[] = Artists;
  constructor() { }

  ngOnInit() {
  }

}
