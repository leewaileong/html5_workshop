import { Injectable } from "@angular/core";

import Dexie from 'dexie';
import { AddressBookInterface } from "./model";

@Injectable()
export class AddressService
{
    private db: Dexie;

    constructor()
    {
        //create db
        this.db = new Dexie('addrdb');
        //define obj store
        this.db.version(1).stores({
            contacts: 'email, name, address, phone'
        });
    }

    addNewAddress(address: AddressBookInterface): Promise<string>
    {
        return (this.db['contacts'].put(address));
    }

    findAddress(pattern: any): Promise<AddressBookInterface[]>
    {
        return (this.db['contacts']
        .orderBy('name')
        .filter(addr => {
            return (pattern.test(addr.name));
        })
        .toArray());
    }
}