import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsService } from '../starwars.service';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(private router: Router,
              private swSvc: StarWarsService,
              private swdbSvc: StarWarsDatabaseService) {}

  ngOnInit() {
  }

  goBack()
  {
    this.router.navigate(['/']);
  }

  save(form: NgForm)
  {
    this.swdbSvc.findPeople(form.value.peopleId)
    .then(() => {
      this.router.navigate(['/']);
      throw false;
    }, 
    this.swSvc.searchPeople.bind(this.swSvc))
    .then(this.swdbSvc.addNewPeople.bind(this.swdbSvc))
    .then((id) => {
      console.log("added id: ", id);
      this.router.navigate(['/'], 
      {queryParams: {message: `Saved ${id}`}});
    })
    .catch(err => 
      {
        if(!err)
        {
          return;
        }
        else
        {
          console.log("save: ", err);
        }
      });
  }

  addPeople(){
    this.router.navigate([ '/add' ]);
  }

}
