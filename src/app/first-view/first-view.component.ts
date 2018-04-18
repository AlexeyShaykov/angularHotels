import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements DoCheck {
  @Input() public data;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  onChange(data) {
    this.change.emit(data);
  }
  public dataKeys = [];
  constructor() {}

  ngDoCheck() {
    this.dataKeys = Object.keys(this.data.data);
  }
}
