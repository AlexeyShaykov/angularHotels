import { Component } from '@angular/core';
import { data$ } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public streamData$ = data$;
  public data;
  public activeView: string = 'hotel';

  onChange(data) {
    this.activeView = data;
  }
}
