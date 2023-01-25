import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; // create property with array from imported array of Hero objects HEROES
  // making a property for this data means it is now accessible for binding in the template

  selectedHero?: Hero; // using the imported Hero interface to create a property that may (?) hold a Hero interface but starts undefined
  onSelect(hero: Hero): void { // onSelect method returns nothing (type void) and takes in a parameter of object type Hero
    this.selectedHero = hero; // changes the value of the component's property (this.selectedHero) when the method is called
  }

  constructor() { }

  ngOnInit(): void { // void type for a function means it returns nothing
  }

}
