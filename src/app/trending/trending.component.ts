import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  articles: Article[];

  constructor(private a : ArticlesService) { }

  ngOnInit() {
    this.a.getTrendingArticles().subscribe(response => {
      this.articles = <any>response["articles"];
      console.log(this.articles);
    });
  }

}
