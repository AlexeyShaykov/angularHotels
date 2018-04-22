import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['../main-view.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() public weather: Weather;
  constructor() {}

  ngOnInit() {}
}
