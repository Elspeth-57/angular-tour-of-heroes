import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail', // selector for HeroDetailComponent
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero; // create the hero property using an input decorator, this can be either undefined or object type Hero
  hero?: Hero; // create hero property, currently undefined, that can have object type Hero

  constructor(
    private route: ActivatedRoute, // property to hold information about the route to the current component
    private location: Location, // Angular service with interacting with browser
    private heroService: HeroService // property to hold injected service to get Heroes array in asynchronous way
  ) { }

  /**
   * After the class is constructed, call the getHero method within the class
   */
  ngOnInit(): void {
    this.getHero();
  }

  /**
   * Method to get the id from the route parameters and then use it to run the heroService method to find the whole hero.
   * This object is then set to the class property hero to be available in the template for binding.
   */
  getHero(): void {
    // create a property id from the parameter :id in the route, making it a number not string
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); // use the injected location service to move back one page
  }

}
