import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { InterestsService } from '../interests.service';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  user: User;
  currentRate: number;
  interests: any[] = new Array<any>();

  constructor(private a : ArticlesService, private i : InterestsService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user == null) {
      this.router.navigate(['login']);
    }
    this.i.getUserInterests(this.user).subscribe(intResponse => {
      if(intResponse == null) {
        this.a.getTrendingArticles().subscribe(response => {
          this.articles = <any>response["articles"];
          console.log(this.articles);
        });
      } else {
        console.log('Response: ' + JSON.stringify(<any>intResponse));
        this.interests = <any>intResponse;
        let query = '';
        let count = 0;
        let len = this.interests.length;
        console.log('len = ' + len);
        this.interests.forEach(function(interest) {
          console.log(interest);
          query += interest['interestName'].replace(' ', '+');
          count++;
          if(count != len) {
            query+='+';
          }
        });
        console.log('Query: ' + query);
        this.a.searchResults(query).subscribe(response => {
          this.articles = <any>response["articles"];
          console.log(this.articles);
        });
      }
    });
  }

  public getComments(article) {
    console.log(article);
    let art: Article = article;
    console.log(art);
    localStorage.setItem('article', JSON.stringify(art));
    this.router.navigate(['comments']);
  }

}
