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
  people: StarWarsPeopleInterface;
  
  title = 'workshop03';

  constructor(private swSvc: StarWarsService, private swdbSvc: StarWarsDatabaseService){
    
  }

  search()
  {
    this.people = null;

    this.swdbSvc.findPeople(this.form.value.peopleId)
    .then((result) => 
    { //resolve
      console.log("found: ", result)
      this.people = result;
      throw (false);
    }, 
    (id) =>
    {
      console.log('not in db: ', id);
      return (id);
    })
    .then(this.swSvc.searchPeople.bind(this.swdbSvc))
    .then((result: StarWarsPeopleInterface) => {
      this.people = this.people || result;
      return (result);
    })
    .then(this.swdbSvc.addNewPeople.bind(this.swdbSvc))
    .catch(err => {
      if(err)
      {
        console.log("err: ", err);
      }
    });

   /* this.people.searchPeople(this.form.value.peopleId)
    .then(result => {
      console.log("search: ", result);
      this.swdbSvc.addNewPeople(result);
    })
    .catch(err => {
      console.log("err: ", err);
    });*/

    this.form.resetForm();
  }
}
