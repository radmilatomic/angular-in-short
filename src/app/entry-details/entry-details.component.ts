import { Component, OnInit, Input } from '@angular/core';
import {Entry} from '../entry'

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
    @Input() phonebookEntry:Entry;
  constructor() { }

  ngOnInit() {
  }

}
