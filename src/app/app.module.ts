import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LapTimePipe } from './pipes/lapTimePipe';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { LapSpeedPipe } from './pipes/lapSpeedPipe';
import { ReversePipe } from './pipes/reversePipe';
import { NewRaceComponent } from './race/new-race/new-race.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LapTimePipe,
    LapSpeedPipe,
    ReversePipe,
    NewRaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
      library.addIconPacks(fas);
  }
}
