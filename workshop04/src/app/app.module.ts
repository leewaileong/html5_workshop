import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleListComponent } from './components/people-list.component';
import { AppRoutesModule } from './app-routes.module';

import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';
import { AddPeopleComponent } from './components/add-people.component';
import { DisplayPeopleComponent } from './components/display-people.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPeopleComponent,
    DisplayPeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    StarWarsService,
    StarWarsDatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
