import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  getHero() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack() {
    this.location.back();
  }
  save(){
     this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack());
  }
}
