import { Injectable } from '@angular/core';
import { Article } from './article';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { environment } from '../environments/environment';

const options = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

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

  public searchResults(query: string) {
    let url = environment.newsApiUrl + 
      'everything?q=' + query.replace(' ', '+') +
      '&sortBy=publishedAt&apiKey=' + environment.apiKey;
    console.log(url);
    return this.http.get(environment.newsApiUrl + 
      'everything?q=' + query.replace(' ', '+') +
      '&sortBy=publishedAt&apiKey=' + environment.apiKey);
  }
}
