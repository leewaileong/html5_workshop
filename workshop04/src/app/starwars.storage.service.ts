import { Injectable } from "@angular/core";

import Dexie from 'dexie';
import { StarWarsPeopleInterface } from "./model";

@Injectable()
export class StarWarsDatabaseService
{
    private db: Dexie;

    constructor()
    {
        //create db
        this.db = new Dexie('starwarsdb');
        //define obj store
        this.db.version(1).stores({
            people: "id, imageURL, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url"
        });
    }

    getAll(): Promise<StarWarsPeopleInterface[]>
    {
        return (
            this.db['people'].orderBy('name')
            .toArray()
        );        
    }

    addNewPeople(people: StarWarsPeopleInterface): Promise<number>
    {
        return (this.db['people'].put(people));
    }

    findPeople(id: number): Promise<StarWarsPeopleInterface>
    {
        const p = new Promise<StarWarsPeopleInterface>(
            (resolve, reject) => 
            {
                this.db['people'].where('id').equals(id)
                .toArray()
                .then(
                    (result: StarWarsPeopleInterface[]) => 
                    {
                        if(result.length > 0)
                        {
                            resolve(result[0]);
                        }
                        else
                        {
                            reject(id);
                        }
                    })
            });

        return p;
    }
}