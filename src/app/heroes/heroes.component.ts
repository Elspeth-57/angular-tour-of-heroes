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
  /**
   * When a button for a hero is pressed it changes the component's property selectedHero to this hero
   * @param hero - The hero object for the button pressed, object type Hero
   * @returns - Nothing
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void { // void type for a function means it returns nothing
  }

}
