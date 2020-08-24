import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { ActivityComponent } from './activity/activity.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { DayListComponent } from './day-list/day-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    ActivityComponent,
    HeaderComponent,
    BodyComponent,
    ActivityListComponent,
    DayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
