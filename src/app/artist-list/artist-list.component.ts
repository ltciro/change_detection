import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  private artistList: any[] = [
    {name: 'Pedro Pastor'},
    {name: 'La Otra'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
