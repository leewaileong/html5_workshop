import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [ StarWarsService, StarWarsDatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
