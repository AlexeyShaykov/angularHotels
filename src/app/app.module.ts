import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';

import {
  MatCardModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { CustomFilterPipe } from './custom-filter.pipe';
import { CustomSplicePipe } from './custom-splice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SecondViewComponent,
    CustomFilterPipe,
    CustomSplicePipe
  ],
  imports: [BrowserModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
