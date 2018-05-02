import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  // getHeroes() {
  //    this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  // }

  add(questionId: number,  categoryId: number, categoryName: String, topicId: number, topicName: String, questionLevel: number, question: string, option1: String, option2: String, option3: String, option4: String, correctAnswer: String){
    this.heroService.addHero({ questionId, categoryId, categoryName, topicId, topicName, questionLevel, question, option1, option2, option3, option4, correctAnswer} as Hero)
      .subscribe(hero => { this.heroes.push(hero)});
  }

  constructor(private heroService: HeroService, private _formBuilder: FormBuilder) { }

  ngOnInit() {

  }

}
