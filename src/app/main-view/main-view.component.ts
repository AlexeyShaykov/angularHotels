import { filter } from 'lodash';

import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  DoCheck,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements DoCheck {
  @Input() public hotels: Hotel[];
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('scrollbar') scrollbar;

  public selectedHotel: Hotel;
  public selectedType = 'hotel';

  public hotelTypes: string[] = ['Hotel', 'Fishing', 'Tours', 'Weather'];

  onChangeType(type) {
    this.change.emit(type.toLocaleLowerCase());
    this.selectedHotel = undefined;
  }
  onChangeHotel(hotel) {
    this.selectedHotel = hotel;
  }
  constructor() {}

  ngDoCheck() {
    if (!this.selectedHotel) {
      this.scrollbar.nativeElement.scrollTop = 0;
      this.selectedHotel = this.hotels[0];
    }
  }
}
