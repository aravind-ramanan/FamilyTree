import { Component, OnInit } from '@angular/core';
import { Person } from '../tree/person/person.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  displayChildren = false;
  id = 0;
  clickCount = 0;
  firstHuman : Person;
  Narayanan : Person = new Person(this.id += 1,"Narayanan","Kandan","Parukutty","Madathedath");
  Ramanan : Person = new Person(this.id += 1,"Ramanan","Narayanan","Lakshmi","Madathedath");
  Kamalan : Person  = new Person(this.id += 1,"Kamalan","Narayanan","Lakshmi","Madathedath");
  Prabhakaran : Person  = new Person(this.id += 1,"Prabhakaran","Narayanan","Lakshmi","Madathedath");
  Kausalya : Person = new Person(this.id += 1,"Kausalya","Narayanan","Lakshmi","Madathedath");
  Omana : Person = new Person(this.id += 1,"Omana","Narayanan","Lakshmi","Madathedath");
  Lathika : Person = new Person(this.id += 1,"Lathika","Narayanan","Lakshmi","Madathedath");
  Ammini : Person = new Person(this.id += 1,"Ammini","Narayanan","Lakshmi","Madathedath");
  

  constructor(){

    this.Narayanan.children = [this.Ramanan,this.Kamalan,this.Prabhakaran, this.Ammini, this.Kausalya, this.Lathika, this.Omana];
    this.Ramanan.addChildren(new Person(this.id += 1,"Lakshmi","Ramanan","Pushpa","Madathedath"));
    this.Ramanan.addChildren(new Person(this.id += 1,"Aravind","Ramanan","Pushpa","Madathedath"));

    this.Prabhakaran.addChildren(new Person(this.id += 1,"Meera","Prabhakaran","Rama","Madathedath"));
    this.Prabhakaran.addChildren(new Person(this.id += 1,"Megha","Prabhakaran","Rama","Madathedath"));
    this.Prabhakaran.addChildren(new Person(this.id += 1,"Mithun","Prabhakaran","Rama","Madathedath"));

    this.Kamalan.addChildren(new Person(this.id += 1,"Kukku","Kamalan","Pushpa","Madathedath"));
    this.Kamalan.addChildren(new Person(this.id += 1,"Cheruth","Kamalan","Pushpa","Madathedath"));

    this.Ammini.addChildren(new Person(this.id += 1,"Suresh","Kunjappan","Ammini","Madathedath"));
    this.Ammini.addChildren(new Person(this.id += 1,"Subhash","Kunjappan","Ammini","Madathedath"));
    this.Ammini.addChildren(new Person(this.id += 1,"Subi","Kunjappan","Ammini","Madathedath"));
    this.Ammini.addChildren(new Person(this.id += 1,"Suja","Kunjappan","Ammini","Madathedath"));
    this.Ammini.addChildren(new Person(this.id += 1,"Supriya","Kunjappan","Ammini","Madathedath"));

    this.Omana.addChildren(new Person(this.id += 1,"Nithya","Raju","Omana","Madathedath"));
    this.Omana.addChildren(new Person(this.id += 1,"Vishnu","Raju","Omana","Madathedath"));

    this.Lathika.addChildren(new Person(this.id += 1,"Atul","Asokan","Lathika","Madathedath"));
    this.Lathika.addChildren(new Person(this.id += 1,"Arun","Asokan","Lathika","Madathedath"));

    this.Kausalya.addChildren(new Person(this.id += 1,"Chinnu","Ravi","Kausalya","Madathedath"));
    this.Kausalya.addChildren(new Person(this.id += 1,"Rohit","Ravi","Kausalya","Madathedath"));
    this.Kausalya.addChildren(new Person(this.id += 1,"Kunjava","Ravi","Kausalya","Madathedath"));

    this.firstHuman = this.Narayanan;

  }


  ngOnInit(): void {
  }
  
  displayFamily(p:Person) {
    this.displayChildren = !this.displayChildren;
    if(!this.displayChildren){
      this.displaySiblings();
    }
    
    
    this.firstHuman = p;
    if (p.children.length == 0 )
    {
      this.clickCount = this.clickCount +1 
      if(this.clickCount >= 2){
        this.clickCount = 0;
        this.firstHuman = this.Narayanan;
      }
      
    }

  }

  displaySiblings(){

  }

}
