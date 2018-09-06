import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { StarWarsService } from './starwars.service';
import { StarWarsPeopleInterface } from './model';
import { StarWarsDatabaseService } from './starwars.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form')
  form: NgForm;
  people: StarWarsService;
  result: StarWarsPeopleInterface;

  title = 'workshop03';

  constructor(private svc: StarWarsService, private swdbSvc: StarWarsDatabaseService){
    this.people = svc;
  }

  search()
  {
    this.swdbSvc.findPeople(this.form.value.peopleId)
    .then((result) => 
    {
      console.log("found: ", result)
      return (null);
    }, 
    this.people.searchPeople.bind(this.swdbSvc))
    .then(result => {
      this.people.searchPeople(this.form.value.peopleId)})
    .catch(err => {
      console.log("err: ", err);
    });

   /* this.people.searchPeople(this.form.value.peopleId)
    .then(result => {
      console.log("search: ", result);
      this.swdbSvc.addNewPeople(result);
    })
    .catch(err => {
      console.log("err: ", err);
    });*/

    this.form.reset();
  }
}
