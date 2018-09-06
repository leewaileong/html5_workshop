import { Component, OnInit, Output, Input } from '@angular/core';
import { AddressBookInterface } from '../model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  @Input()
  addresses: AddressBookInterface;

  constructor() { }

  ngOnInit() {
  }

}
