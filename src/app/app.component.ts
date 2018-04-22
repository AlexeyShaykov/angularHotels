import { Component, OnInit } from '@angular/core';

import { HotelsService } from './common/sevices/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public streamData$: Hotel[];
  public data;
  public activeType: string = 'hotel';

  constructor(private _hotels: HotelsService) {}
  ngOnInit() {
    this._hotels.hotels.subscribe(data => {
      this.streamData$ = data;
    });
  }

  onChangeType(data) {
    this.activeType = data;
  }
}
