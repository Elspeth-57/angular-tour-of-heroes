import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

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
    // send a message to message array using injected messageService
    this.messageService.add('Hero Service: fetched heroes');
    return heroes;
  }

  /**
   * Method to return an Observable with a single hero object, found in the HEROES mock data.
   * A message will be added using messageService as well.
   * @param id - The id of the hero you are looking for.
   */
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Hero Service: fetched hero id=${id}`);
    return of(hero);
  }

  // getHeroes(): Hero[] { // synchronous
  //   return HEROES;
  // }

  /**
   * When HeroService is created Angular injects MessageService into a private property.
   * Being private means that this property can only be accessed within the class,
   * not the template or passed down to other classes as a property.
   * @param messageService - property injected with service that looks after message array.
   */
  constructor(private messageService: MessageService) {
  }

}
