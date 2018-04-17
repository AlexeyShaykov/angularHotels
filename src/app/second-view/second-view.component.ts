import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {
  @Input() public data;

  constructor() {}

  ngOnInit() {}
}
