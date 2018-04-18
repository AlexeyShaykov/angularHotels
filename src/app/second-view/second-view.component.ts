import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {
  @Input() public data;

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  public title: string = '';

  constructor() {}

  ngOnInit() {}

  onChange() {
    this.change.emit(this.title);
  }

  ngDoCheck() {
    this.title = this.data.name;
  }
}
