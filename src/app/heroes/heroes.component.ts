import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { // using the imported Hero interface - sets types for an object
    id: 1,
    name: 'Windstorm',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
