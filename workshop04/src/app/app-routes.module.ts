import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { AddPeopleComponent } from './components/add-people.component';
import { DisplayPeopleComponent } from './components/display-people.component';

const ROUTES: Routes = [
  { path: '',           component: PeopleListComponent },
  { path: 'people',     component: PeopleListComponent },
  { path: 'add',        component: AddPeopleComponent },
  { path: 'detail/:id', component: DisplayPeopleComponent },
  { path: '**',         redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
