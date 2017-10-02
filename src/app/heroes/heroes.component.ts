import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id:1,
    name:'Windstorm'
  };

  constructor(private heroService: HeroService) { }

  onselect(hero:Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
