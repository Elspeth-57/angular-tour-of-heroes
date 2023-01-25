import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { // using the imported Hero interface
    id: 1,
    name: 'Windstorm', // changed using two-way data binding [(ngModel)] in template
  };

  constructor() { }

  ngOnInit(): void { // void type for a function means it returns nothing
  }

}
