import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AddressBookInterface } from '../model';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {

  @Output()
  newAddress = new EventEmitter<AddressBookInterface>();

  constructor() { }

  ngOnInit() {
  }

  processForm(form: NgForm)
  {
    console.log('form: ', form.value);
    this.newAddress.next(<AddressBookInterface>form.value);

    form.resetForm();
  }
}
