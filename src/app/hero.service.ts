import { Hero } from './Hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json'},
)};

@Injectable()
export class HeroService {
  
  questionUrl = 'http://localhost:8080/api/v1/question-generator/question'

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.questionUrl,hero);
  }

  getHeroes(): Observable<Hero[]> {
     return this.http.get<Hero[]>(this.questionUrl);
  }

  getHero(questionId: number):Observable<Hero> {
    const getByIdUrl = `${this.questionUrl}/${questionId}`;
    return this.http.get<Hero>(getByIdUrl);
  }

  updateHero(hero: Hero):Observable<any> {
    const id = hero.questionId;
    const getByIdUrl = `${this.questionUrl}/${id}`;
    return this.http.put(getByIdUrl, hero);
  }

  deleteHero(hero: Hero): Observable<Hero>{
    const id = hero.questionId;
    const getByIdUrl = `${this.questionUrl}/${id}`;
    return this.http.delete<Hero>(getByIdUrl);
  }

  constructor(private http: HttpClient) { }

}
