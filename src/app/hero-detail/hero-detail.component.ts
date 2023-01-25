import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail', // selector for HeroDetailComponent
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero; // create the hero property using an input decorator, this can be either undefined or object type Hero

  constructor() { }

  ngOnInit(): void {
  }

}
