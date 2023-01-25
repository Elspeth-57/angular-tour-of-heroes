import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({ // @Injectable decorator suggests this class is used in dependency injection
  providedIn: 'root' // service provided at root level - can be injected anywhere
})

// (Hero)Service is used to get (hero) data from anywhere: web service, local storage, mock data source ...
// This lets you remove data access from components, and use a service instead
// You can make the service available to the dependency injection system by registering a provider (see above)
export class HeroService {

  /**
   * Method to return the HEROES, an array of mock hero objects.
   *
   * Mock data can be returned immediately so the function is synchronous.
   *
   * If the data cannot be returned immediately there must be an asynchronous signature.
   * The of() function returns an Observable<Hero[]> with a single value - the array of mock values in this case
   * @returns heroes - Observable<Hero[]> with a value of the array called heroes
   */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  // getHeroes(): Hero[] { // synchronous
  //   return HEROES;
  // }

  constructor() { }
}
