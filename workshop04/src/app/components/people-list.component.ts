import { Component, OnInit } from '@angular/core';
import { StarWarsPeopleInterface } from '../model';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: StarWarsPeopleInterface[] = [];

  constructor(
    private swdbSvc: StarWarsDatabaseService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.swdbSvc.getAll()
    .then(result => {
      this.people = result;
      console.log("PeopleListComponent: ngOnInit: result: ", result);
    })
    .catch(err => {
      console.log("err: ", err);
    })

    if(this.activatedRoute.snapshot.queryParams.message)
    {
      console.log("snackbar");
     // this.snackBar.open(
     //   this.activatedRoute.snapshot.queryParams.message,"open", {duration: 5});
    }
  }

  addPeople()
  {
    this.router.navigate([ '/add' ]);
  }

}
