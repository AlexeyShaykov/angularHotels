import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SecondViewComponent } from './second-view/second-view.component';

import { HotelsService } from './common/sevices/hotels.service';

import {
  MatCardModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { GetHolesByKey } from './custom-filter.pipe';
import { CustomSplicePipe } from './custom-splice.pipe';
import { HotelComponent } from './main-view/hotel/hotel.component';
import { WeatherComponent } from './main-view/weather/weather.component';
import { SocialComponent } from './main-view/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SecondViewComponent,
    GetHolesByKey,
    CustomSplicePipe,
    HotelComponent,
    WeatherComponent,
    SocialComponent
  ],
  imports: [BrowserModule, MatCardModule],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
