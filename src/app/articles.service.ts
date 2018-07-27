import { Injectable } from '@angular/core';
import { Article } from './article';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  subscribers: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(null);

  constructor(private http: HttpClient) {
  }

  public getTrendingArticles() {
    return this.http.get(environment.newsApiUrl + 
        'top-headlines?country=us&apiKey=' + 
        environment.apiKey);
  }
}
