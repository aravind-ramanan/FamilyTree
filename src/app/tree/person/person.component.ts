import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person : Person;
  @Output() onClickPerson = new EventEmitter<Person>()

  constructor() { 

  }

  ngOnInit(): void {
  }

  onClickComponent(p : Person) {
    this.onClickPerson.emit(p);

  }

}
