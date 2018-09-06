//make this into service
//inject http into service
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";

import { StarWarsPeopleInterface } from "./model";

const URL = 'https://swapi.co/api/people';

@Injectable()
export class StarWarsService
{
    people: StarWarsPeopleInterface;

    constructor(private httpClient: HttpClient)
    {}

    searchPeople(id: number): Promise<StarWarsPeopleInterface>
    {
        console.log("here");
        return (
            this.httpClient.get<any>(`https://swapi.co/api/people/${id}`)
            .toPromise()
            .then(result => {
                result.id = id;
                result.imageURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                return (result);
            })
            .catch(err => {
                
            })            
        );
    }
}