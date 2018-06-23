import { Injectable } from '@angular/core';
import {PEOPLE} from './mock-data'
import { Observable, of } from 'rxjs';
import {Entry} from './entry'

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
    
  constructor() { }
  getPeople():Observable<Entry[]>{
      return of (PEOPLE);
  }

  deleteEntry(entry:Entry):Observable<Entry[]>{
      let peopleUpdate:Entry[]=PEOPLE.filter(p=>p!=entry)
      return of (peopleUpdate);
  }

  addEntry(entry:Entry):Observable<Entry[]>{
      let newPeople:Entry[]=PEOPLE.slice()
      newPeople.push(entry)
      return of (newPeople);
  }
}
