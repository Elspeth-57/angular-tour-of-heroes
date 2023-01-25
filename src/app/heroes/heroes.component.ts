import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // create a property, as a currently empty array, that will be an array of object types Hero - it is available for binding in the template
  heroes: Hero[] = [];

  selectedHero?: Hero; // using the imported Hero interface to create a property that may (?) hold a Hero interface but starts undefined

  /**
   * Method to retrieve heroes from the HeroService and assign them to heroes property in HeroesComponent
   */
  getHeroes(): void { // HeroService is asynchronous so returns an Observable<Hero[]> containing the array called heroes
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // .subscribe waits for the Observable, then passes the array (heroes) into the callback to assign to the component property this.heroes
  }
  // getHeroes(): void { synchronous
  //   this.heroes = this.heroService.getHeroes();
  // }

  /**
   * When a button for a hero is pressed it changes the component's property selectedHero to this hero
   * @param hero - The hero object for the button pressed, object type Hero
   * @returns - Nothing
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /**
   * Function called when this component, HeroesComponent, is being created.
   * @param heroService - Defines private heroService property and identifies it as a HeroService injection site
   */
  constructor(private heroService: HeroService) {
     }

  /**
   * Function called when component initiated, after constructor.
   * It calls the component's getHeroes function which sets the heroes property using dependency injection from the HeroesService.
   */
  ngOnInit(): void { // void type for a function means it returns nothing
    this.getHeroes();
  }

}
