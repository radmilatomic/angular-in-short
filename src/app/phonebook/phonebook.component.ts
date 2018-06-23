import { Component, OnInit } from '@angular/core';
import {PhonebookService} from '../phonebook.service'
import {Entry} from '../entry'

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

   people:Entry[];
   selectedEntry:Entry

  constructor(private phonebookService:PhonebookService) { }

  getPeople() :void{
      this.phonebookService.getPeople().subscribe(people=>this.people=people)
  }

  deleteEntry(entry:Entry) :void{
      console.log("are we connected?")
      this.people=this.people.filter(p=>p!==entry)
  }

  add(name:string,number:string){
    var id=this.people[this.people.length-1].id+1
    let newEntry:Entry={
      id:id,
      name:name,
      phonenumber:number
          }
    this.people.push(newEntry);
  }

  onSelect(entry:Entry):void{
    console.log("we're connected")
    this.selectedEntry=entry
  }

  ngOnInit() {
      this.getPeople();
  }

}
