import { Component, OnInit } from '@angular/core';
import { AddressBookInterface } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'workshop02';

  private tabs = [
    { label: 'A - E', pattern: /^[a-e].*/i },
    { label: 'F - J', pattern: /^[f-j].*/i },
    { label: 'K - O', pattern: /^[k-o].*/i },
    { label: 'P - T', pattern: /^[p-t].*/i },
    { label: 'U - Z', pattern: /^[u-z].*/i }
  ];

  private loadedAddress: AddressBookInterface[] = [];

  private addressSvc: AddressService;

 // private loadedAddress: AddressBookInterface[] = [];

  //svc is injected into component
  constructor(svc: AddressService)
  {
    this.addressSvc = svc;
  }

  ngOnInit()
  {
    this.addressSvc.findAddress(this.tabs[0].pattern)
    .then(addr => {
      console.log("address: ", addr);
    })
    .catch(err => {
      console.log("err: ", err);
    })
  }

  processAddress(address: AddressBookInterface)
  {
    console.log('processAddress: ', address);
    this.addressSvc.addNewAddress(address)
      .then(result => {
        //TODO: check if new addr is visible under current tab, if yes, reload tab

        console.log("saved: ", result);
      })
      .catch(err => {
        console.log("err: ", err);
      })
  }

  loadAddress(event: MatTabChangeEvent)
  {
    console.log('event: ', this.tabs[event.index].pattern);

    this.addressSvc.findAddress(this.tabs[event.index].pattern)
    .then(addr => {
      console.log("address: ", addr);
      this.loadedAddress = addr;
    })
    .catch(err => {
      console.log("err: ", err);
    })
  }
}
