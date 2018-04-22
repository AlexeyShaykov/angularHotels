import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['../main-view.component.css']
})
export class HotelComponent implements OnInit {
  @Input() public hotel: Hotel;
  @Output() hotelClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  hotelClicked(data) {
    this.hotelClick.emit(data);
  }
}
