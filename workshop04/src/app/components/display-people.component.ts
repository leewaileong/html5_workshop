import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import { StarWarsPeopleInterface } from '../model';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css']
})
export class DisplayPeopleComponent implements OnInit {

  people: StarWarsPeopleInterface;

  constructor(private swdbSvc: StarWarsDatabaseService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.swdbSvc.findPeople(parseInt(this.activatedRoute.snapshot.params.id))
    .then(result => {
      this.people = result;
      console.log("ABC: ", this.activatedRoute.snapshot.params.id);
    })
    
  }
}
