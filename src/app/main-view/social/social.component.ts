import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['../main-view.component.css']
})
export class SocialComponent implements OnInit {
  @Input() public social: Social;

  constructor() {}

  ngOnInit() {}
}
